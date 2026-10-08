"use client";

import { createContext, useContext, useState } from "react";
import Alert, { type AlertColor } from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";

type Notify = (message: string, severity?: AlertColor) => void;

const NotificationsContext = createContext<Notify | null>(null);

type Notice = {
  message: string;
  severity: AlertColor;
};

export function NotificationsProvider({ children }: { children: React.ReactNode }) {
  const [notice, setNotice] = useState<Notice | null>(null);

  const notify: Notify = (message, severity = "success") => {
    setNotice({ message, severity });
  };

  return (
    <NotificationsContext.Provider value={notify}>
      {children}
      <Snackbar
        open={notice !== null}
        autoHideDuration={6000}
        onClose={() => setNotice(null)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          severity={notice?.severity ?? "success"}
          onClose={() => setNotice(null)}
          variant="standard"
          sx={{ width: "100%" }}
        >
          {notice?.message}
        </Alert>
      </Snackbar>
    </NotificationsContext.Provider>
  );
}

export function useNotification() {
  const notify = useContext(NotificationsContext);

  if (!notify) {
    throw new Error("useNotification must be used within NotificationsProvider");
  }

  return notify;
}
