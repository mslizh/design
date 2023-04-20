import * as FluentIcon from "@fluentui/react-icons";

type IconName = keyof typeof FluentIcon;
type IconComponent = React.FunctionComponent<IconComponentProps>;

interface IconProps {
  name: IconName;
}

interface IconComponentProps extends React.SVGAttributes<SVGElement> {
  viewBox?: string;
}

export function Icon(props: IconProps) {
  const { name } = props;
  const IconRoot = FluentIcon[name] as IconComponent;
  return <IconRoot />;
}

export default Icon;
