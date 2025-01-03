import styled from "styled-components";

function getColor(type: "default" | "danger" | "disabled") {
    switch(type) {
        case 'danger': return 'danger'
        default: return 'primary'
    }
}

export const StopStyle = styled.stop<{ styleType: "default" | "danger" | "disabled", customColor?: string}>`
  stop-color: ${(props) => props.customColor?? props.theme.colors[getColor(props.styleType)]};
`;

export const CircleStyle = styled.circle<{
  styleType: "default" | "danger" | "disabled";
  customStrokeColor?: string;
}>`
  stroke: ${(props) => props.customStrokeColor ?? props.theme.colors[getColor(props.styleType)]};
`;