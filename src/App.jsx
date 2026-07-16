import { Navigate, Route, Routes } from "react-router-dom";
import MarketingLayout from "./components/MarketingLayout";
import AppShell from "./components/AppShell";
import ProtectedRoute from "./components/ProtectedRoute";

import Home from "./pages/marketing/Home";
import Pricing from "./pages/marketing/Pricing";
import { SolutionDetail, SolutionsIndex } from "./pages/marketing/Solutions";
import {
  BlogIndex,
  BlogPost,
  CareerApply,
  Careers,
  CareerThanks,
  Changelog,
  Company,
  Contact,
  ContactThanks,
  Customers,
  DocDetail,
  DocsIndex,
  IntegrationDetail,
  IntegrationsMarketing,
  NotFound,
  Resources,
  Security,
  StatusPage,
} from "./pages/marketing/MiscPages";
import {
  Checkout,
  CheckoutSuccess,
  DemoConfirmed,
  DemoRequest,
} from "./pages/marketing/DemoCheckout";
import {
  ForgotPassword,
  ForgotPasswordSent,
  Login,
  ResetPassword,
  Signup,
  SSOLogin,
} from "./pages/auth/AuthPages";
import {
  OnboardingChannels,
  OnboardingCompany,
  OnboardingDataset,
  OnboardingLayout,
  OnboardingReview,
  OnboardingUseCase,
} from "./pages/onboarding/Onboarding";
import Dashboard from "./pages/app/Dashboard";
import {
  CampaignCreate,
  CampaignDetail,
  CampaignEdit,
  CampaignResults,
  CampaignsIndex,
} from "./pages/app/Campaigns";
import {
  ModelDetail,
  ModelGovernance,
  ModelsIndex,
  ModelVersions,
  TrainingCreate,
  TrainingIndex,
  TrainingJobDetail,
  TrainingLogs,
} from "./pages/app/ModelsTraining";
import {
  AnalyticsExport,
  AnalyticsExportDone,
  AnalyticsHome,
  AnalyticsReports,
  AudienceCreate,
  AudienceDetail,
  AudienceImport,
  AudiencesIndex,
} from "./pages/app/AudiencesAnalytics";
import {
  AdminApiKeyCreate,
  AdminApiKeys,
  AdminAuditLog,
  AdminConsole,
  AdminEnvironments,
  AppIntegrations,
  BillingUpgrade,
  BillingUpgradeSuccess,
  ExperimentCreate,
  ExperimentDetail,
  Experiments,
  IntegrationConnect,
  IntegrationSuccess,
  SettingsBilling,
  SettingsNotifications,
  SettingsTeam,
  SettingsWorkspace,
  TeamInvite,
  TeamInviteSent,
} from "./pages/app/IntegrationsSettings";

export default function App() {
  return (
    <Routes>
      <Route element={<MarketingLayout />}>
        <Route index element={<Home />} />
        <Route path="solutions" element={<SolutionsIndex />} />
        <Route path="solutions/:slug" element={<SolutionDetail />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="resources" element={<Resources />} />
        <Route path="docs" element={<DocsIndex />} />
        <Route path="docs/:slug" element={<DocDetail />} />
        <Route path="blog" element={<BlogIndex />} />
        <Route path="blog/:slug" element={<BlogPost />} />
        <Route path="customers" element={<Customers />} />
        <Route path="company" element={<Company />} />
        <Route path="careers" element={<Careers />} />
        <Route path="careers/apply" element={<CareerApply />} />
        <Route path="careers/thanks" element={<CareerThanks />} />
        <Route path="contact" element={<Contact />} />
        <Route path="contact/thanks" element={<ContactThanks />} />
        <Route path="integrations" element={<IntegrationsMarketing />} />
        <Route path="integrations/:id" element={<IntegrationDetail />} />
        <Route path="security" element={<Security />} />
        <Route path="changelog" element={<Changelog />} />
        <Route path="status" element={<StatusPage />} />
        <Route path="demo" element={<DemoRequest />} />
        <Route path="demo/confirmed" element={<DemoConfirmed />} />
        <Route path="checkout/:planId" element={<Checkout />} />
        <Route path="checkout/:planId/success" element={<CheckoutSuccess />} />
        <Route path="login" element={<Login />} />
        <Route path="login/sso" element={<SSOLogin />} />
        <Route path="signup" element={<Signup />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="forgot-password/sent" element={<ForgotPasswordSent />} />
        <Route path="reset-password" element={<ResetPassword />} />
      </Route>

      <Route path="onboarding" element={<OnboardingLayout />}>
        <Route index element={<Navigate to="company" replace />} />
        <Route path="company" element={<OnboardingCompany />} />
        <Route path="use-case" element={<OnboardingUseCase />} />
        <Route path="channels" element={<OnboardingChannels />} />
        <Route path="dataset" element={<OnboardingDataset />} />
        <Route path="review" element={<OnboardingReview />} />
      </Route>

      <Route
        path="app"
        element={
          <ProtectedRoute requireOnboarded>
            <AppShell />
          </ProtectedRoute>
        }
      >
        <Route index element={<Dashboard />} />
        <Route path="campaigns" element={<CampaignsIndex />} />
        <Route path="campaigns/new" element={<CampaignCreate />} />
        <Route path="campaigns/:campaignId" element={<CampaignDetail />} />
        <Route path="campaigns/:campaignId/edit" element={<CampaignEdit />} />
        <Route path="campaigns/:campaignId/results" element={<CampaignResults />} />
        <Route path="models" element={<ModelsIndex />} />
        <Route path="models/:modelId" element={<ModelDetail />} />
        <Route path="models/:modelId/versions" element={<ModelVersions />} />
        <Route path="models/:modelId/governance" element={<ModelGovernance />} />
        <Route path="training" element={<TrainingIndex />} />
        <Route path="training/new" element={<TrainingCreate />} />
        <Route path="training/:jobId" element={<TrainingJobDetail />} />
        <Route path="training/:jobId/logs" element={<TrainingLogs />} />
        <Route path="audiences" element={<AudiencesIndex />} />
        <Route path="audiences/new" element={<AudienceCreate />} />
        <Route path="audiences/import" element={<AudienceImport />} />
        <Route path="audiences/:audienceId" element={<AudienceDetail />} />
        <Route path="analytics" element={<AnalyticsHome />} />
        <Route path="analytics/reports" element={<AnalyticsReports />} />
        <Route path="analytics/reports/export" element={<AnalyticsExport />} />
        <Route path="analytics/reports/export/done" element={<AnalyticsExportDone />} />
        <Route path="integrations" element={<AppIntegrations />} />
        <Route path="integrations/:integrationId/connect" element={<IntegrationConnect />} />
        <Route path="integrations/:integrationId/success" element={<IntegrationSuccess />} />
        <Route path="experiments" element={<Experiments />} />
        <Route path="experiments/new" element={<ExperimentCreate />} />
        <Route path="experiments/:experimentId" element={<ExperimentDetail />} />
        <Route path="settings" element={<SettingsWorkspace />} />
        <Route path="settings/team" element={<SettingsTeam />} />
        <Route path="settings/team/invite" element={<TeamInvite />} />
        <Route path="settings/team/invite/sent" element={<TeamInviteSent />} />
        <Route path="settings/billing" element={<SettingsBilling />} />
        <Route path="settings/billing/upgrade" element={<BillingUpgrade />} />
        <Route path="settings/billing/upgrade/success" element={<BillingUpgradeSuccess />} />
        <Route path="settings/notifications" element={<SettingsNotifications />} />
        <Route path="admin" element={<AdminConsole />} />
        <Route path="admin/audit-log" element={<AdminAuditLog />} />
        <Route path="admin/environments" element={<AdminEnvironments />} />
        <Route path="admin/api-keys" element={<AdminApiKeys />} />
        <Route path="admin/api-keys/new" element={<AdminApiKeyCreate />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
