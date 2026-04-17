import { Button } from "@/components/ui/button";

export function StickyBookCTA() {
  return (
    <div className="fixed bottom-0 inset-x-0 z-20 lg:hidden bg-cream/95 backdrop-blur border-t border-navy/10 px-4 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
      <Button variant="coral" size="lg" asChild className="w-full">
        <a href="#rezervet">Rezervēt atrakciju</a>
      </Button>
    </div>
  );
}
