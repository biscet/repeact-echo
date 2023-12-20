import { join } from "node:path";
import { BrowserWindow, shell, app } from "electron";

const preload = join(__dirname, "./preload.js");
const url = process.env.VITE_DEV_SERVER_URL;
const distSolidJSFolder = join(__dirname, "../dist-solidjs");
const publicFolder = app.isPackaged
  ? join(distSolidJSFolder, "/electron/")
  : join(__dirname, "../public/electron/");

let win;

const screenSize = () => {
  if (process.env.WINDOW_SIZE === "windowed") {
    return { width: 1280, height: 720 };
  }

  return {
    fullscreen: true,
    resizable: false,
    movable: false,
    maximizable: false,
  };
};

export const createWindow = () => {
  win = new BrowserWindow({
    icon: join(publicFolder, "icon_512x512.icns"),
    ...screenSize(),
    minWidth: 1280,
    minHeight: 720,
    autoHideMenuBar: false,
    webPreferences: {
      preload,
    },
  });

  win.webContents.setWindowOpenHandler(({ url }) => {
    if (url.startsWith("https:")) shell.openExternal(url);
    return { action: "deny" };
  });

  if (url) {
    win.loadURL(url);
    win.webContents.openDevTools();
  } else {
    win.loadFile(join(distSolidJSFolder, "index.html"));
  }
};
