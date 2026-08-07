import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import Home from "@/pages/Home";
import ProjectsPage from "@/pages/ProjectsPage";
import CertificationsPage from "@/pages/CertificationsPage";
import SkillsPage from "@/pages/SkillsPage";
import OpenSourcePage from "@/pages/OpenSourcePage";
import ContactPage from "@/pages/ContactPage";
import { Route, Router as WouterRouter, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";

// Vite BASE_URL is "/" locally and "/viviana-ayala-portfolio/" on GitHub Pages
const routerBase = import.meta.env.BASE_URL.replace(/\/$/, "") || "";

function Router() {
  return (
    <WouterRouter base={routerBase}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/projects" component={ProjectsPage} />
        <Route path="/certifications" component={CertificationsPage} />
        <Route path="/skills" component={SkillsPage} />
        <Route path="/open-source" component={OpenSourcePage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/404" component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </WouterRouter>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
