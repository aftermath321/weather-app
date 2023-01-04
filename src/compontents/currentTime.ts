
export const currentHour = () => {
  let today = new Date();
  let time =
    today.getHours();
    return time;
}

export const currentTime = () => {
  let today = new Date();
  let time =
    today.getHours() + ":" + today.getMinutes()
    return time;
}

    // today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

