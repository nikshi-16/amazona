"use client"

import { create } from "zustand"

type Toast = {
  id: string
  title?: string
  description: string
  variant?: "default" | "destructive"
  action?: React.ReactNode
}

type ToastStore = {
  toasts: Toast[]
  toast: (toast: Omit<Toast, "id">) => void
  removeToast: (id: string) => void
}
export const toast = (toast: Omit<Toast, "id">) => useToast.getState().toast(toast);


export const useToast = create<ToastStore>((set) => ({
  toasts: [],
  toast: (toast) =>
    set((state) => ({
      toasts: [...state.toasts, { id: Date.now().toString(), ...toast }],
    })),
  removeToast: (id) =>
    set((state) => ({
      toasts: state.toasts.filter((toast) => toast.id !== id),
    })),
}))
