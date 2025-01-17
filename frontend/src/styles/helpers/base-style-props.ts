export interface BaseStyleProps {
  $width?: string;
  $minWidth?: string;
  $maxWidth?: string;
  $height?: string;
  $minHeight?: string;
  $maxHeight?: string;
  $margin?:
    | string
    | {
        top?: string;
        bottom?: string;
        left?: string;
        right?: string;
        x?: string;
        y?: string;
      };

  $padding?:
    | string
    | {
        top?: string;
        bottom?: string;
        left?: string;
        right?: string;
        x?: string;
        y?: string;
      };
}