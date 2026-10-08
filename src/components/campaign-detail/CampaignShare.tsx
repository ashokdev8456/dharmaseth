"use client";

import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import Button from "@mui/material/Button";
import { useNotification } from "@/components/ui/notifications";

type CampaignShareProps = {
  title: string;
};

export function CampaignShare({ title }: CampaignShareProps) {
  const notify = useNotification();

  async function share() {
    const url = window.location.href;

    if (typeof navigator.share === "function") {
      try {
        await navigator.share({ title, url });
        return;
      } catch (error) {
        if (error instanceof DOMException && error.name === "AbortError") return;
      }
    }

    try {
      await navigator.clipboard.writeText(url);
      notify("Campaign link copied");
    } catch {
      notify("The link could not be copied", "error");
    }
  }

  return (
    <Button
      variant="text"
      color="inherit"
      startIcon={<ShareOutlinedIcon />}
      onClick={share}
      aria-label="Share this campaign"
      sx={{ alignSelf: "flex-start" }}
    >
      Share
    </Button>
  );
}
