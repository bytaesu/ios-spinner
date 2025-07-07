import { IosSpinner } from "ios-spinner";
import { ModeToggle } from "./components/mode-toggle";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-10 space-y-8">
      <div className="absolute top-4 right-4">
        <ModeToggle />
      </div>

      <div className="text-center">
        <h1 className="text-2xl font-semibold">iOS Spinner</h1>
        <p className="text-sm">
          An iOS-style spinner for React
        </p>
      </div>

      <div className="space-y-6">
        <div className="flex flex-col items-center space-y-2">
          <IosSpinner className="w-10 h-10" />
          <code className="text-xs text-muted-foreground">className="w-10 h-10"</code>
        </div>

        <div className="flex flex-col items-center space-y-2">
          <IosSpinner className="text-green-500 w-8 h-8" />
          <code className="text-xs text-muted-foreground">className="text-green-500 w-8 h-8"</code>
        </div>

        <div className="flex flex-col items-center space-y-2">
          <IosSpinner className="text-blue-600 w-6 h-6" />
          <code className="text-xs text-muted-foreground">className="text-blue-600 w-6 h-6"</code>
        </div>
      </div>

      <div className="pt-6 border-t border-border text-center">
        <p className="text-xs text-muted-foreground">Install with:</p>
        <pre className="mt-1 px-3 py-1 rounded bg-muted text-sm font-mono select-all">
          npm i ios-spinner
        </pre>

        <a
          href="https://github.com/bytaesu/ios-spinner"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block text-xs text-muted-foreground underline hover:text-foreground"
        >
          View source on GitHub
        </a>
      </div>
    </div>
  );
};

export default App;