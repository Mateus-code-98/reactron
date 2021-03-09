type Listener = (...args: any[]) => void;

interface AppRuntime {
    send: (channel: string, data: any) => void
    subscribe: (channel: string, listener: Listener) => void
    removeAll:(channel: string) => void
    removeListener:(channel: string, listener: Listener) => void
}

const appRuntime = (window as any).appRuntime as AppRuntime

export default appRuntime