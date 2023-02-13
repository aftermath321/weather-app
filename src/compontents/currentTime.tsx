export const currentHour = () => {
  let today = new Date();
  let time = today.getHours();
  return time;
};

export const currentTime = () => {
  let today = new Date();

  let time =
    today.getHours() + ":" + String(today.getMinutes()).padStart(2, "0");
  return time;
};

export const dayOfTheWeek = (dayNumber: number) => {
  let now = new Date();

  let day = now.getDate() + dayNumber;
  let dayAsDate =
    now.getDate() + dayNumber + "." + now.getMonth() + "." + now.getFullYear();

  let date: any = new Date(now.getFullYear(), now.getMonth(), day);

  let dayOfTheWeek = date.toLocaleDateString("en-US", {
    weekday: "long",
  });

  return (
    <>
      <p>
        {dayAsDate}
        <br/>
        {dayOfTheWeek}
      </p>
    </>
  );
};
