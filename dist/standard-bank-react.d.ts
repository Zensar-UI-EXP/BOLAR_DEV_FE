import { ButtonProps as ButtonProps_2 } from '@mui/material';
import { ChangeEvent } from 'react';
import { default as default_2 } from 'react';
import { FormControlProps } from '@mui/material';
import { JSX } from 'react/jsx-runtime';
import { MouseEvent as MouseEvent_2 } from 'react';
import { MUIStyledCommonProps } from '@mui/system';
import { RadioGroupProps as RadioGroupProps_2 } from '@mui/material';
import { SelectChangeEvent } from '@mui/material';
import { SelectProps as SelectProps_2 } from '@mui/material';
import { StepperProps } from '@mui/material';
import { StyledComponent } from '@emotion/styled';
import { SxProps } from '@mui/material';
import { TextFieldProps } from '@mui/material';
import { Theme as Theme_2 } from '@mui/material';

export declare function AccountDetailsCard({ cards }: CardProps): JSX.Element;

declare interface AccountInfoProps {
    variant: 'account' | 'balance';
    cardIcon?: default_2.ReactElement<{
        style?: default_2.CSSProperties;
    }>;
    cardTitle?: string;
    cardSubheader?: number | string;
    cardCells?: InfoCells[];
}

export declare function AccountTile({ icon, accountName, accountNumber, buttons, overflowButtonIcon, balanceCards, overflowButtonOnClick, }: AccountTileProps): JSX.Element;

declare interface AccountTileProps {
    icon: default_2.ReactElement<{
        style?: default_2.CSSProperties;
    }>;
    accountName: string;
    accountNumber: number;
    balanceCards?: default_2.ReactElement<typeof BalanceCard>[];
    buttons: default_2.ReactElement<typeof Button>[];
    overflowButtonIcon?: default_2.ReactElement;
    overflowButtonOnClick?: () => void;
}

export declare function AlertAvatar({ icon, size, variant, notification, notificationIcon, }: AlertAvatarProps): JSX.Element;

declare type AlertAvatarProps = {
    icon?: default_2.ReactNode;
    variant?: 'primary' | 'secondary' | 'success' | 'error';
    size?: 'large' | 'medium' | 'small' | 'extraSmall';
    notification?: boolean;
    notificationIcon?: default_2.ReactNode;
};

export declare function Autocomplete({ label, sx, options, onInputChange, onHighlightChange, disabled, error, helperText, }: AutocompleteProps): JSX.Element;

declare type AutocompleteProps = {
    /** The label for the component. */
    label: string;
    /** Optional material UI styling properties. */
    sx?: SxProps;
    /** Thee available options as an array of strings. */
    options: Array<string | {
        label: string;
        id: string;
    }>;
    disabled?: boolean;
    helperText?: string;
    error: boolean;
    /** Input change handler. */
    onInputChange: (event: React.SyntheticEvent, value: string) => void;
    onHighlightChange: (event: React.SyntheticEvent, option: string | null, reason: string) => void;
};

export declare function BalanceCard({ balanceTitle, currencySymbol, balance, }: BalanceCardProps): JSX.Element;

declare interface BalanceCardProps {
    balanceTitle: string;
    currencySymbol?: string;
    balance?: number | string;
}

export declare function Breadcrumb({ links }: BreadCrumbProps): JSX.Element;

export declare type BreadcrumbItem = {
    label: string;
    href?: string;
};

declare type BreadCrumbProps = {
    links: BreadcrumbItem[];
};

/** This is effectively a wrapper for the MUI Button component. You can use all the props and the component will apply
 * the Design System styles on it.
 */
export declare function Button({ buttonVariant, small, isLoading, disabled, children, iconOnly, toggleButton, toggleValue, onClick, upperCaseText, ...rest }: ButtonProps): JSX.Element;

/** A compponent for laying Buttons horizontally. */
export declare function ButtonBar({ children, align }: ButtonBarProps): JSX.Element;

declare type ButtonBarProps = {
    /** Optioanl property to align the buttons to the start or end of the bar. Values are `start` or `end`. Defaults to `end`. */
    align?: 'start' | 'end';
    /** These should be Button components but there is no real restriction. */
    children: default_2.ReactNode;
};

declare type ButtonProps = {
    buttonVariant?: 'primary' | 'primary-header-menu' | 'primary-on-colour' | 'secondary' | 'secondary-on-colour' | 'tertiary' | 'tertiary-on-colour' | 'text' | 'error' | 'error-secondary' | 'error-tertiary';
    small?: boolean;
    isLoading?: boolean;
    disabled?: boolean;
    iconOnly?: boolean;
    children?: default_2.ReactNode;
    toggleButton?: boolean;
    toggleValue?: string;
    upperCaseText?: boolean;
    onClick?: default_2.MouseEventHandler<HTMLButtonElement>;
} & ButtonProps_2;

export declare function ButtonToggle({ fullWidth, buttons, initialSelected, onChange, }: ToggleButtonGroupProps): JSX.Element;

declare interface CardProps {
    cards: AccountInfoProps[];
}

export declare function CheckBox({ variant, disabled, defaultChecked, label, indeterminate, handleChange, }: CustomCheckboxProps): JSX.Element;

export declare function Chip({ labelText, avatarIcon, disabled, onClick, onDelete, deleteIcon, }: ChipProps): JSX.Element;

declare interface ChipProps {
    labelText?: string;
    deleteIcon?: default_2.ReactElement;
    avatarIcon?: default_2.ReactElement;
    disabled: boolean;
    onClick?: () => void;
    onDelete?: () => void;
}

export declare function CircularProgress({ currentStep, circularProgressSize, circularProgressThickness, steps, }: OverallProgressCircleProps): JSX.Element;

declare interface CustomCheckboxProps {
    variant: 'error' | 'primary';
    label: string;
    disabled?: boolean;
    defaultChecked?: boolean;
    checked?: boolean;
    handleChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    indeterminate?: boolean;
}

declare interface CustomPaginationProps {
    rows: unknown[];
    page: number;
    rowsPerPage: 10 | 20 | 50;
    onPageChange: (_: ChangeEvent<unknown>, newPage: number) => void;
    onRowsPerPageChange: (newRowsPerPage: number) => void;
}

export declare function DataTable({ columns, rows, rowsPerPage, rowVariant, rowButton, headCells, accountIcon, }: DataTableProps): JSX.Element;

declare type DataTableColumn = string | {
    key: string;
    type?: 'account' | 'normal';
};

declare interface DataTableProps {
    tableTitle?: string;
    columns: DataTableColumn[];
    headCells: HeadCell[];
    rows: unknown[];
    rowsPerPage: 10 | 20 | 50;
    rowVariant?: 'default' | 'dropdown' | 'checkbox';
    rowButton?: boolean;
    statusColumn?: boolean;
    accountIcon?: default_2.ReactElement;
}

declare interface DataTableRowProps<T = Record<string, unknown>> {
    row: T;
    columns: (string | {
        key: string;
        type?: 'account' | 'normal';
    })[];
    variant: 'default' | 'dropdown' | 'checkbox';
    isSelected?: boolean;
    onSelect?: () => void;
    showMoreButton?: boolean;
    onButtonClick?: () => void;
    status?: boolean;
    statusLabel?: string;
    statusTheme?: 'primary' | 'success' | 'warning' | 'error' | 'info';
    accountIcon?: React.ReactElement;
    accountName?: string;
    accountNumber?: number | string;
}

export declare function Dialog({ name, title, titleBackgroundColor, content, open, primaryCTALabel, secondaryCTALabel, tertiaryCTALabel, onClose, onPrimaryCTA, primaryCTALoading, onSecondaryCTA, secondaryCTALoading, onTertiaryCTA, tertiaryCTALoading, iconOnlyPrimaryCTA, iconOnlySecondaryCTA, iconOnlyTertiaryCTA, loading, maxWidth, primaryCTAStartIcon, primaryCTAEndIcon, secondaryCTAStartIcon, secondaryCTAEndIcon, tertiryCTAStartIcon, tertiaryCTAEndIcon, }: DialogProps): JSX.Element;

declare interface DialogCardProps {
    variant?: 'alert' | 'text';
    cardTitle?: string;
    icon?: default_2.ReactNode;
    alertIconTheme?: 'primary' | 'secondary' | 'success' | 'error';
    alertIconSize: 'large' | 'medium' | 'small' | 'extraSmall';
    cardBodyText?: string[];
}

export declare function DialogInfoCard({ variant, cardTitle, icon, cardBodyText, alertIconSize, alertIconTheme, }: DialogCardProps): JSX.Element;

declare interface DialogProps {
    /** Used for aria labels and form controls */
    name: string;
    /** The title of the modal */
    title: string;
    titleBackgroundColor?: 'primary' | 'white';
    /** The content */
    content: default_2.ReactNode;
    /** Show/hide the modal */
    open: boolean;
    /** If supplied an X buton to close will be added */
    onClose?: () => void;
    /** If supplied an Accept primary buton will be added */
    onPrimaryCTA?: () => void;
    /** If supplied a Decline secondary buton will be added */
    primaryCTALoading?: boolean;
    iconOnlyPrimaryCTA?: boolean;
    primaryCTAStartIcon?: default_2.ReactNode;
    primaryCTAEndIcon?: default_2.ReactNode;
    onSecondaryCTA?: () => void;
    /** Label for the optional accept button */
    secondaryCTALoading?: boolean;
    iconOnlySecondaryCTA?: boolean;
    secondaryCTAStartIcon?: default_2.ReactNode;
    secondaryCTAEndIcon?: default_2.ReactNode;
    onTertiaryCTA?: () => void;
    tertiaryCTALoading?: boolean;
    iconOnlyTertiaryCTA?: boolean;
    tertiryCTAStartIcon?: default_2.ReactNode;
    tertiaryCTAEndIcon?: default_2.ReactNode;
    primaryCTALabel?: string;
    /** Label for the optional decline button */
    secondaryCTALabel?: string;
    /** When true a loading animation is played on the accept button */
    tertiaryCTALabel?: string;
    loading?: boolean;
    /** Optional max width property for the modal */
    maxWidth?: string;
}

export declare function dropdown({ label, value, defaultValue, disabled, options, handleChange, fullWidth, }: DropDownProps): JSX.Element;

declare type DropDownOption = {
    label: string;
    value: string;
};

declare type DropDownProps = {
    label: string;
    value?: string;
    defaultValue?: string;
    disabled?: boolean;
    options?: DropDownOption[];
    handleChange?: (event: SelectChangeEvent<string>) => void;
    fullWidth?: boolean;
};

export declare type Fields = {
    type: string;
    name: string;
    label: string;
    placeholder?: string;
    required?: boolean;
    defaultValue?: string;
    heading?: string;
    nolabels?: boolean;
    hasBorder?: boolean;
    value?: string;
    options?: SelectType_2[];
    errorText?: string;
    fornSubmitted?: boolean;
    params?: TextFieldProps;
    disabled?: boolean;
    error?: boolean;
    helperText?: string;
    sx?: SxProps;
    onChange?: (event: ChangeEvent) => void;
};

declare type Fields_2 = {
    type: string;
    name: string;
    label: string;
    placeholder?: string;
    required?: boolean;
    defaultValue?: string;
    heading?: string;
    nolabels?: boolean;
    hasBorder?: boolean;
    value?: string;
    options?: SelectType_2[];
    errorText?: string;
    fornSubmitted?: boolean;
    params?: TextFieldProps;
    disabled?: boolean;
    error?: boolean;
    helperText?: string;
    sx?: SxProps;
    onChange?: (event: ChangeEvent) => void;
};

export declare const Form: ({ mainHeading, isEditMode, fields, onClose, onSubmit, cancelLabel, submitLabel, }: FormCreatorProps) => JSX.Element;

declare interface FormCreatorProps {
    mainHeading: string;
    isEditMode?: boolean;
    onClose?: () => void;
    fields: Fields[];
    onSubmit: (formData: Record<string, string>) => void;
    cancelLabel?: string;
    submitLabel?: string;
}

declare interface HeadCell {
    id: string;
    label: string;
    numeric: boolean;
}

export declare const Heading: default_2.FC<HeadingProps>;

declare interface HeadingProps extends default_2.HTMLAttributes<HTMLElement> {
    as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'legend' | 'label';
    children: default_2.ReactNode;
    subtitle?: string;
    subtitleColor?: string;
    padding?: string;
    margin?: string;
    lineHeight?: string;
    dark?: boolean;
    hasBorder?: boolean;
}

declare interface InfoBlockProps {
    title: string;
    description: string;
    color?: string;
    width?: string;
    backgroundColor?: string;
    alertIconStyle: 'circle' | 'triangle';
}

declare interface InfoCells {
    title: string;
    value?: number | string;
}

export declare const Inforblock: ({ title, description, color, width, backgroundColor, alertIconStyle, }: InfoBlockProps) => JSX.Element;

export declare const Label: ({ children, htmlFor, label, }: LabelProps_2 & {
    /** The id of the input element */
    htmlFor: string;
}) => JSX.Element;

declare interface LabelProps {
    text: string;
    paletteColor?: 'primary' | 'error' | 'warning' | 'info' | 'success' | undefined;
}

declare interface LabelProps_2 {
    /** The text to display */
    children: default_2.ReactNode;
    /** The id of the input element */
    htmlFor: string;
    label: string;
}

export declare const Loader: ({ children, loaded, size, color, inheritColor, backgroundColor, hideText, }: LoaderProps & {
    children?: default_2.ReactNode;
}) => JSX.Element;

declare interface LoaderProps {
    children?: default_2.ReactNode;
    loaded?: boolean;
    size?: number;
    backgroundColor?: string;
    hideText?: boolean;
    color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning' | 'inherit';
    inheritColor?: string;
}

export declare type Order = 'asc' | 'desc';

declare interface OverallProgressCircleProps {
    currentStep?: number;
    circularProgressSize?: number;
    circularProgressThickness?: number;
    steps: string[];
}

declare interface primaryCTA {
    ctaClick: () => void;
    icon?: default_2.ReactElement;
    ctaMessage: default_2.ReactNode;
    iconOnly?: boolean;
}

export declare function RadioButton({ value, label, disabled, defaultChecked, handleChange, }: RadioButtonProps): JSX.Element;

declare interface RadioButtonProps {
    value: unknown;
    label: string;
    disabled?: boolean;
    defaultChecked?: boolean;
    handleChange?: (event: default_2.ChangeEvent<HTMLInputElement>) => void;
}

export declare function RadioGroup({ options, label, id, radioProps, name, direction, helperText, value, disabled, defaultValue, onChange, }: RadioGroupProps): JSX.Element;

declare interface RadioGroupProps {
    /** The available options. Each options is a `{ value:string, label: string }` object. */
    options: RadioType[];
    /** Label for the group */
    label: string;
    /** Group ID */
    id: string;
    /** Optional pass through MUI RadioGroupProps. */
    radioProps?: RadioGroupProps_2;
    /** The name, generally this can match the ID. Used for referencing when in forms. */
    name: string;
    /** Direction of laying the radio buttons, can be `horizontal` or `vertical`. Defaults to `horizontal`. */
    direction?: 'horizontal' | 'vertical';
    /** Optional helper text. */
    helperText?: string;
    /** Set the value for controlled components. */
    value?: string;
    /** Disables the component. */
    disabled?: boolean;
    /** Optional default value. This should be the `value` of one of the `option` objects. */
    defaultValue?: string;
    /** Change handler. */
    onChange?: (event: default_2.ChangeEvent<HTMLInputElement>) => void;
}

export declare type RadioType = {
    value: string;
    label: string;
};

export declare function Select({ formOptions, selectProps, options, rounded, helperText, value, name, error, }: SelectProps): JSX.Element;

declare interface SelectProps {
    formOptions?: FormControlProps;
    selectProps?: SelectProps_2;
    options: SelectType[];
    rounded?: boolean;
    helperText?: string;
    value: string;
    name: string;
    error: boolean;
}

export declare type SelectType = {
    value: string;
    label: string;
};

declare type SelectType_2 = {
    value: string;
    label: string;
};

export declare function Snackbar({ snackbarTheme, snackBarMessage, buttons, variant, }: SnackbarProps): JSX.Element;

declare interface SnackbarProps {
    snackbarTheme: SnackbarTheme;
    snackBarMessage: string;
    buttons: primaryCTA[];
    variant?: 'default' | 'bordered';
}

declare enum SnackbarTheme {
    Info = "info",
    Warning = "warning",
    Success = "success"
}

export declare function StatusLabel({ text, paletteColor, }: LabelProps): JSX.Element;

export declare function Stepper(props: StepperPropsExt): JSX.Element;

declare interface StepperPropsExt extends StepperProps {
    steps: StepperStep[];
    activeStepProp?: number;
    stepCompleted: {
        [k: number]: boolean;
    };
    blockViewSteps?: boolean;
    orientation?: 'horizontal' | 'vertical';
}

export declare type StepperStep = {
    label: string;
    description?: string;
    stepFailed?: boolean;
    optional?: boolean;
    skipped?: boolean;
    stepContent: default_2.ReactNode;
};

export declare function Switch({ name, label, checked, disabled, onChange, defaultValue, }: SwitchProps): JSX.Element;

declare interface SwitchProps {
    name: string;
    label: string;
    checked?: boolean;
    disabled?: boolean;
    onChange?: (event: default_2.ChangeEvent<HTMLInputElement>) => void;
    defaultValue?: boolean;
}

export declare function TableHead<T>(props: TableHeaderProps<T>): JSX.Element;

declare interface TableHeaderProps<T> {
    headCells: HeadCell[];
    numSelected: number;
    onSelectAllClick: (event: ChangeEvent<HTMLInputElement>) => void;
    order: Order;
    orderBy: keyof T;
    onRequestSort: (event: MouseEvent_2<unknown>, property: keyof T) => void;
    rowCount: number;
    columns?: string[];
    checkbox?: boolean;
    dropdown?: boolean;
    status?: boolean;
}

export declare function TablePagination({ rows, page, rowsPerPage, onPageChange, onRowsPerPageChange, }: CustomPaginationProps): JSX.Element;

export declare function TableRow<T = Record<string, unknown>>({ row, columns, variant, isSelected, onSelect, showMoreButton, onButtonClick, status, statusLabel, statusTheme, accountIcon, }: DataTableRowProps<T>): JSX.Element;

export declare function TableWrapper({ dataSets, filterButtons, }: TableWrapperProps): JSX.Element;

declare interface TableWrapperProps {
    dataSets: DataTableProps[];
    filterButtons?: ButtonProps[];
}

/**
 * The TextField component is used for normal text inputs.
 */
export declare const TextField: StyledComponent<Fields_2 & MUIStyledCommonProps<Theme_2>, {}, {}>;

export declare const Theme: Theme_2;

declare type ToggleButtonGroupProps = {
    onChange?: (event: default_2.MouseEvent<HTMLElement>, newAlignment: string | null) => void;
    fullWidth?: boolean;
    buttons?: ButtonProps[];
    initialSelected?: number;
};

export { }


declare module '@mui/material/styles' {
    interface PaletteColor {
        lighter?: string;
        disabledLight?: string;
        disabledDark?: string;
    }
    interface SimplePaletteColorOptions {
        lighter?: string;
        disabledLight?: string;
        disabledDark?: string;
    }
}


declare module '@mui/material/styles' {
    interface TypographyVariants {
        xxsRegular: React.CSSProperties;
        xxsMedium: React.CSSProperties;
        xxsBold: React.CSSProperties;
        xsRegular: React.CSSProperties;
        xsMedium: React.CSSProperties;
        xsBold: React.CSSProperties;
        sRegular: React.CSSProperties;
        sMedium: React.CSSProperties;
        sBold: React.CSSProperties;
        mRegular: React.CSSProperties;
        mMedium: React.CSSProperties;
        mBold: React.CSSProperties;
        lRegular: React.CSSProperties;
        lMedium: React.CSSProperties;
        lBold: React.CSSProperties;
        xlRegular: React.CSSProperties;
        xlMedium: React.CSSProperties;
        xlBold: React.CSSProperties;
        xxlRegular: React.CSSProperties;
        xxlMedium: React.CSSProperties;
        xxlBold: React.CSSProperties;
        xxxxlRegular: React.CSSProperties;
    }
    interface TypographyVariantsOptions {
        xxsRegular?: React.CSSProperties;
        xxsMedium?: React.CSSProperties;
        xxsBold?: React.CSSProperties;
        xsRegular?: React.CSSProperties;
        xsMedium?: React.CSSProperties;
        xsBold?: React.CSSProperties;
        sRegular?: React.CSSProperties;
        sMedium?: React.CSSProperties;
        sBold?: React.CSSProperties;
        mRegular?: React.CSSProperties;
        mMedium?: React.CSSProperties;
        mBold?: React.CSSProperties;
        lRegular?: React.CSSProperties;
        lMedium?: React.CSSProperties;
        lBold?: React.CSSProperties;
        xlRegular?: React.CSSProperties;
        xlMedium?: React.CSSProperties;
        xlBold?: React.CSSProperties;
        xxlRegular?: React.CSSProperties;
        xxlMedium?: React.CSSProperties;
        xxlBold?: React.CSSProperties;
        xxxxlRegular?: React.CSSProperties;
    }
}

declare module '@mui/material/styles' {
    interface Palette {
        tertiary: Palette['primary'];
    }
    interface PaletteOptions {
        tertiary?: PaletteOptions['primary'];
    }
}


declare module '@mui/material/Button' {
    interface ButtonPropsColorOverrides {
        tertiary: true;
    }
}
