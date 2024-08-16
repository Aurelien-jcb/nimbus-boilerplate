import { useTranslations } from "next-intl";
import { AreaGraph } from "../charts/area-graph";
import { BarGraph } from "../charts/bar-graph";
import { PieGraph } from "../charts/pie-graph";
import StatCard from "../layout/stat-card";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Icons } from "../ui/icons";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

export const AdminDashboard = () => {
  const t = useTranslations("Dashboard");
  return (
    <Tabs defaultValue="overview" className="space-y-4">
      <TabsList>
        <TabsTrigger value="overview">{t("Overviews.title")}</TabsTrigger>
        <TabsTrigger value="analytics">{t("Analytics.title")}</TabsTrigger>
      </TabsList>
      <TabsContent value="overview" className="space-y-4">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <StatCard
            title="Total Revenue"
            value="$45,231.89"
            description="+20.1% from last month"
            icon={<Icons.dollar className="h-4 w-4 text-muted-foreground" />}
          />
          <StatCard
            title="Subscriptions"
            value="+2350"
            description="+180.1% from last month"
            icon={<Icons.users className="h-4 w-4 text-muted-foreground" />}
          />
          <StatCard
            title="Sales"
            value="+12,234"
            description="+19% from last month"
            icon={<Icons.billing className="h-4 w-4 text-muted-foreground" />}
          />
          <StatCard
            title="Active Now"
            value="+573"
            description="+201 since last hour"
            icon={<Icons.activity className="h-4 w-4 text-muted-foreground" />}
          />
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-7">
          <div className="col-span-4">
            <BarGraph />
          </div>
          <Card className="col-span-4 md:col-span-3">
            <CardHeader>
              <CardTitle>Recent Sales</CardTitle>
              <CardDescription>You made 265 sales this month.</CardDescription>
            </CardHeader>
            <CardContent>{/* <RecentSales /> */}</CardContent>
          </Card>
          <div className="col-span-4">
            <AreaGraph />
          </div>
          <div className="col-span-4 md:col-span-3">
            <PieGraph />
          </div>
        </div>
      </TabsContent>
    </Tabs>
  );
};
