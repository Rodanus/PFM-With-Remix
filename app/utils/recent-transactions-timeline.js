export const recentTransactionsTimeline = () => {
  // this week
  const today = new Date(),
    firstDayOfWeek = new Date(today.setDate(today.getDate() - today.getDay()));

  // last month
  const date = new Date(),
    firstDayOfLastMonth = new Date(date.getFullYear(), date.getMonth() - 1, 1),
    lastDayOfLastMonth = new Date(date.getFullYear(), date.getMonth(), 0);

  // this year
  const thisYear = new Date(today.getFullYear(), 0, 1);

  const timeline = [
    {
      title: "this week",
      filter: {
        gte: firstDayOfWeek.toISOString(),
      },
    },
    {
      title: "last month",
      filter: {
        gte: firstDayOfLastMonth.toISOString(),
        lte: lastDayOfLastMonth.toISOString(),
      },
    },
    {
      title: "this year",
      filter: {
        gte: thisYear.toISOString(),
      },
    },
  ];

  return timeline;
};
