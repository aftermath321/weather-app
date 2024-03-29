import Image from "next/image";

const weatherIcon = (icon: number | undefined): any => {
  switch (icon) {
    case 0:
      return <Image alt="weather-icon" src="/sun.png" width={100} height={100} />;
    case 1:
    case 2:
    case 3:
      return (
        <Image alt="weather-icon" src="/cloudy.png" width={100} height={100} />
      );
    case 45:
    case 48:
      return (
        <Image alt="weather-icon" src="/foggy.png" width={100} height={100} />
      );
    case 51:
    case 53:
    case 55:
      return (
        <Image alt="weather-icon" src="/drizzle.png" width={100} height={100} />
      );
    case 56:
    case 57:
      return (
        <Image alt="weather-icon" src="/snow(1).png" width={100} height={100} />
      );
    case 61:
    case 63:
    case 65:
      return (
        <Image alt="weather-icon" src="/rain1.png" width={100} height={100} />
      );
    case 66:
    case 67:
      return (
        <Image alt="weather-icon" src="/rain.png" width={100} height={100} />
      );
    case 71:
    case 73:
    case 100:
      return (
        <Image alt="weather-icon" src="/snow.png" width={100} height={100} />
      );
    case 77:
      return (
        <Image alt="weather-icon" src="/snowflake.png" width={100} height={100} />
      );
    case 80:
    case 81:
    case 82:
      return (
        <Image alt="weather-icon" src="/umbrella.png" width={100} height={100} />
      );
    case 85:
    case 86:
      return (
        <Image
          alt="weather-icon"
          src="/snowflake(1).png"
          width={100}
          height={100}
        />
      );
    case 95:
      return (
        <Image alt="weather-icon" src="/storm.png" width={100} height={100} />
      );
    case 96:
    case 99:
      return (
        <Image alt="weather-icon" src="/hailstone.png" width={100} height={100} />
      );
  }
};

export default weatherIcon;