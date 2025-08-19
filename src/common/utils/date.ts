export function timeInSeconds(time: string) {
  const [hours = "0", minutes = "0", seconds = "0"] = time.split(":");

  const hoursBecomeSeconds = Number(hours) * 3600;
  const minutesBecomeSeconds = Number(minutes) * 60;
  const totalSeconds =
    hoursBecomeSeconds + minutesBecomeSeconds + Number(seconds);
  return totalSeconds;
}
