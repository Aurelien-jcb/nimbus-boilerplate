import LocaleSwitcher from "@/components/layout/locale-switcher";
import PageContainer from "@/components/layout/page-container";

export default function Page() {
  return (
    <PageContainer>
      <div className="space-y-2">
        <LocaleSwitcher />
      </div>
    </PageContainer>
  );
}
