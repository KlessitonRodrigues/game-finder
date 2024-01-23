import {
  RiExpandUpDownFill,
  RiFilePdf2Fill,
  RiFunctionLine,
  RiGalleryLine,
  RiGameLine,
  RiLoader5Line,
  RiSkipLeftLine,
  RiSkipRightLine,
  RiStarFill,
  RiStarLine,
  RiYoutubeLine,
} from 'react-icons/ri';

export const iconMap: Record<Props.Icons['type'], React.ReactElement> = {
  download: <RiFilePdf2Fill />,
  selector: <RiExpandUpDownFill />,
  spinner: <RiLoader5Line />,
  next: <RiSkipRightLine />,
  previous: <RiSkipLeftLine />,
  youtube: <RiYoutubeLine />,
  star: <RiStarFill />,
  starLine: <RiStarLine />,
  category: <RiFunctionLine />,
  platform: <RiGameLine />,
  screenshot: <RiGalleryLine />,
};
