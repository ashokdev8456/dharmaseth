"use client";

import { useEffect, useMemo, useState, type ReactNode } from "react";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import MenuItem from "@mui/material/MenuItem";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/navigation";
import { EmptyState } from "@/components/ui/EmptyState";
import { CampaignGrid } from "@/components/campaigns/CampaignGrid";
import { routes } from "@/config/routes";
import { causes } from "@/data/causes";
import type { CampaignListingItem, CampaignStatus, CauseId } from "@/types/domain";
import {
  activeFilterCount,
  campaignQueryToSearch,
  campaignSortLabel,
  campaignSorts,
  campaignStatusLabel,
  campaignStatuses,
  causeLabel,
  defaultCampaignQuery,
  filterCampaigns,
  parseCampaignQuery,
  type CampaignQuery,
  type CampaignSort,
} from "@/utils/campaignFilters";

type ExploreListingProps = {
  campaigns: CampaignListingItem[];
  initialQuery: CampaignQuery;
  children?: ReactNode;
};

export function ExploreListing({ campaigns, initialQuery, children }: ExploreListingProps) {
  const router = useRouter();
  const [query, setQuery] = useState(initialQuery);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [draft, setDraft] = useState(initialQuery);
  const results = useMemo(() => filterCampaigns(campaigns, query), [campaigns, query]);
  const filterCount = activeFilterCount(query);
  const constraintCount = filterCount + (query.q ? 1 : 0);

  function commit(next: CampaignQuery) {
    setQuery(next);
    const params = campaignQueryToSearch(next);
    const href = params.size > 0 ? `${routes.explore}?${params.toString()}` : routes.explore;
    router.replace(href, { scroll: false });
  }

  useEffect(() => {
    function onPopState() {
      const params = Object.fromEntries(new URLSearchParams(window.location.search));
      setQuery(parseCampaignQuery(params));
    }

    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  function toggleFilters() {
    if (filtersOpen) {
      setFiltersOpen(false);
      return;
    }
    setDraft(query);
    setFiltersOpen(true);
  }

  function applyFilters() {
    commit(draft);
    setFiltersOpen(false);
  }

  function clearDraftFilters() {
    setDraft(defaultCampaignQuery);
  }

  const countLabel = `${results.length} ${results.length === 1 ? "campaign" : "campaigns"}`;

  return (
    <Stack spacing={{ xs: 1.5, md: 2 }}>
      <Box>
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 2 }}>
          <Box sx={{ minWidth: 0, flex: "1 1 auto" }}>{children}</Box>
          <Button
            variant="outlined"
            color="inherit"
            startIcon={filtersOpen ? <CloseIcon /> : <MenuIcon />}
            aria-expanded={filtersOpen}
            aria-controls="campaign-filter-panel"
            onClick={toggleFilters}
            sx={{ flexShrink: 0, minHeight: 44, px: 2 }}
          >
            {constraintCount > 0 ? `Filters (${constraintCount})` : "Filters"}
          </Button>
        </Box>
        <Collapse in={filtersOpen} unmountOnExit>
          <Stack
            id="campaign-filter-panel"
            spacing={2}
            sx={{
              mt: 1.5,
              p: { xs: 2, md: 2.5 },
              borderRadius: "22px",
              border: "1px solid",
              borderColor: "border.subtle",
              bgcolor: "background.paper",
            }}
          >
            <TextField
              label="Search campaigns"
              placeholder="Title, cause, or place"
              value={draft.q}
              onChange={(event) => setDraft((current) => ({ ...current, q: event.target.value }))}
              fullWidth
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon aria-hidden />
                    </InputAdornment>
                  ),
                  endAdornment: draft.q ? (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="Clear search"
                        edge="end"
                        onClick={() => setDraft((current) => ({ ...current, q: "" }))}
                      >
                        <CloseIcon />
                      </IconButton>
                    </InputAdornment>
                  ) : undefined,
                },
              }}
            />
            <Box
              sx={{
                display: "grid",
                gap: 1.5,
                gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", lg: "repeat(4, minmax(0, 1fr))" },
              }}
            >
              <CauseSelect value={draft.cause} onChange={(cause) => setDraft((current) => ({ ...current, cause }))} />
              <StatusSelect
                value={draft.status}
                onChange={(status) => setDraft((current) => ({ ...current, status }))}
              />
              <FeaturedSelect
                value={draft.featured}
                onChange={(featured) => setDraft((current) => ({ ...current, featured }))}
              />
              <SortSelect value={draft.sort} onChange={(sort) => setDraft((current) => ({ ...current, sort }))} />
            </Box>
            <Stack direction="row" spacing={1} sx={{ justifyContent: "flex-end" }}>
              <Button color="inherit" onClick={clearDraftFilters} sx={{ minHeight: 44 }}>
                Clear
              </Button>
              <Button variant="contained" onClick={applyFilters} sx={{ minHeight: 44 }}>
                Apply
              </Button>
            </Stack>
          </Stack>
        </Collapse>
      </Box>

      {constraintCount > 0 ? (
        <Stack direction="row" spacing={1} sx={{ alignItems: "center", flexWrap: "wrap" }} useFlexGap>
          {query.q ? (
            <Chip
              label={`Search: ${query.q}`}
              aria-label={`Remove Search: ${query.q}`}
              onDelete={() => commit({ ...query, q: "" })}
            />
          ) : null}
          {query.cause ? (
            <Chip
              label={`Cause: ${causeLabel(query.cause)}`}
              aria-label={`Remove Cause: ${causeLabel(query.cause)}`}
              onDelete={() => commit({ ...query, cause: "" })}
            />
          ) : null}
          {query.status ? (
            <Chip
              label={`Status: ${campaignStatusLabel(query.status)}`}
              aria-label={`Remove Status: ${campaignStatusLabel(query.status)}`}
              onDelete={() => commit({ ...query, status: "" })}
            />
          ) : null}
          {query.featured ? (
            <Chip
              label="Featured"
              aria-label="Remove featured filter"
              onDelete={() => commit({ ...query, featured: false })}
            />
          ) : null}
          {constraintCount > 1 ? (
            <Button color="inherit" onClick={() => commit(defaultCampaignQuery)}>
              Clear all
            </Button>
          ) : null}
        </Stack>
      ) : null}

      <Typography variant="body2" color="text.secondary">
        {countLabel}
      </Typography>

      {results.length > 0 ? (
        <CampaignGrid campaigns={results} />
      ) : (
        <EmptyState
          title="No campaigns found"
          description="Try a different search, or clear the filters."
          action={
            <Button variant="contained" onClick={() => commit(defaultCampaignQuery)}>
              Clear filters
            </Button>
          }
        />
      )}

    </Stack>
  );
}

function CauseSelect({
  value,
  onChange,
}: {
  value: CauseId | "";
  onChange: (value: CauseId | "") => void;
}) {
  return (
    <TextField
      select
      label="Cause"
      value={value || "all"}
      onChange={(event) => onChange(event.target.value === "all" ? "" : (event.target.value as CauseId))}
      fullWidth
    >
      <MenuItem value="all">Any cause</MenuItem>
      {causes.map((cause) => (
        <MenuItem key={cause.id} value={cause.id}>
          {cause.label}
        </MenuItem>
      ))}
    </TextField>
  );
}

function StatusSelect({
  value,
  onChange,
}: {
  value: CampaignStatus | "";
  onChange: (value: CampaignStatus | "") => void;
}) {
  return (
    <TextField
      select
      label="Status"
      value={value || "all"}
      onChange={(event) =>
        onChange(event.target.value === "all" ? "" : (event.target.value as CampaignStatus))
      }
      fullWidth
    >
      <MenuItem value="all">Any status</MenuItem>
      {campaignStatuses.map((status) => (
        <MenuItem key={status} value={status}>
          {campaignStatusLabel(status)}
        </MenuItem>
      ))}
    </TextField>
  );
}

function FeaturedSelect({
  value,
  onChange,
}: {
  value: boolean;
  onChange: (value: boolean) => void;
}) {
  return (
    <TextField
      select
      label="Featured"
      value={value ? "featured" : "all"}
      onChange={(event) => onChange(event.target.value === "featured")}
      fullWidth
    >
      <MenuItem value="all">Any campaign</MenuItem>
      <MenuItem value="featured">Featured only</MenuItem>
    </TextField>
  );
}

function SortSelect({ value, onChange }: { value: CampaignSort; onChange: (value: CampaignSort) => void }) {
  return (
    <TextField
      select
      label="Sort"
      value={value}
      onChange={(event) => onChange(event.target.value as CampaignSort)}
      fullWidth
    >
      {campaignSorts.map((sort) => (
        <MenuItem key={sort} value={sort}>
          {campaignSortLabel(sort)}
        </MenuItem>
      ))}
    </TextField>
  );
}

