import { cn } from "~/lib/utils";

type Variant = "default";

interface PropsType extends React.ComponentProps<"div"> {
  isOverRideDefaultClassName?: boolean;
  variant?: Variant;
}

type PropsEnumType = Record<Variant, string>;

/* Label React Component */
function Label({
  children,
  isOverRideDefaultClassName,
  className,
  ...restProps
}: PropsType) {
  return (
    <div
      className={cn(isOverRideDefaultClassName ? className : "text-xs")}
      {...restProps}
    >
      {children}
    </div>
  );
}

/* Title Component */
function Title({
  children,
  isOverRideDefaultClassName,
  className,
  variant = "default",
  ...restProps
}: PropsType) {
  const variantPropsEnum: PropsEnumType = {
    default: "break-words font-semibold uppercase",
  };

  return (
    <div
      className={cn(
        isOverRideDefaultClassName ? className : variantPropsEnum[variant],
      )}
      {...restProps}
    >
      {children}
    </div>
  );
}

/* Value Component */
function Value({
  children,
  isOverRideDefaultClassName,
  className,
  variant = "default",
  ...restProps
}: PropsType) {
  const variantPropsEnum: PropsEnumType = {
    default: "break-words",
  };
  return (
    <div
      className={cn(
        isOverRideDefaultClassName ? className : variantPropsEnum[variant],
      )}
      {...restProps}
    >
      {children}
    </div>
  );
}

/* Making Sub Components of Label */
Label.Title = Title;
Label.Value = Value;

/* Exporting Named Component */
export { Label };
