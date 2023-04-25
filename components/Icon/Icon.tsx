import * as FluentIcon from "@fluentui/react-icons";
import { registerComponent } from "@plasmicapp/host";

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

export function registerIcon() {
  registerComponent(Icon, {
    name: "Icon",
    props: {
      name: {
        type: "string",
        defaultValue: "AddRegular",
        description:
          "Найти название иконки можно на https://github.com/microsoft/fluentui-system-icons/blob/main/icons_regular.md",
      },
    },
    importPath: "@/components/Icon",
  });
}
