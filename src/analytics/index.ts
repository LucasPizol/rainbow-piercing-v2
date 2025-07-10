export type Event = {
  action: string;
  category: string;
  label: string;
  value?: number;
};

export const event = ({ action, category, label, value }: Event) => {
  if (typeof window === "undefined") return;

  try {
    (window as any).gtag("event", action, {
      event_category: category,
      event_label: label,
      value,
    });
  } catch (error) {}
};
