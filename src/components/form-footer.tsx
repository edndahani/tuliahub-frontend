import { Link } from "react-router-dom";
import { Field, FieldDescription } from "./ui/field";
import { Button } from "./ui/button";
import { Spinner } from "./ui/spinner";

type FooterProps = {
  linkForm: string;
  buttonLabel: string;
  description: string;
  linkLabel: string;
  to: string;
  isLoading: boolean;
  loadingLabel?: string;
};

const FormFooter = ({
  linkForm,
  buttonLabel,
  description,
  linkLabel,
  to,
  loadingLabel,
  isLoading,
}: FooterProps) => {
  return (
    <Field>
      <Button type="submit" form={linkForm} className="flex items-center justify-center">
        {isLoading ? (
          <>
            <Spinner />
            <span>{loadingLabel}</span>
          </>
        ) : (
          buttonLabel
        )}
      </Button>
      <FieldDescription className="flex justify-center gap-2">
        <span className="text-[15px]">{description}</span>
        <Link to={to} className="text-[15px] text-primary no-underline">
          {linkLabel}
        </Link>
      </FieldDescription>
    </Field>
  );
};

export default FormFooter;
