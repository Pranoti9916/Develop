import * as React from 'react';
import {SvgUri} from 'react-native-svg';
import {SafeAreaView} from 'react-native-safe-area-context';
/* SVGR has dropped some elements not supported by react-native-svg: title */

export function SvgClock() {
  // return (
  //   <Svg
  //     width={76}
  //     height={73}
  //     viewBox="0 0 48 1"
  //     xmlns=" https://assets.v7-io.invisionapp.com/assets/A_MGFjZjlkZDY2YjhlM2JmOfoBaNbRIdM--ifYJcm5BjajG8H9wTEOtkIqAopUZ4Rbn5SPyi8Y16Duey84IvFK3ruXV9tHR5v1PKxbzRMbL7npa9HtxSotnq2tyrUIlhRR?filename=tasks.svg"
  //     {...props}>
  //     <Path d="M249 77h76v73h-76z" fill="#063855" fillRule="evenodd" />
  //   </Svg>
  // );

  return (
    <SvgUri
      width="76"
      height="70"
      uri="https://assets.v7-io.invisionapp.com/assets/A_MGFjZjlkZDY2YjhlM2JmOfoBaNbRIdM--ifYJcm5BjajG8H9wTEOtkIqAopUZ4Rbn5SPyi8Y16Duey84IvFK3ruXV9tHR5v1PKxbzRMbL7npa9HtxSotnq2tyrUIlhRR?filename=tasks.svg"
    />
  );
}

export function SvgTime() {
  return (
    <SvgUri
      width="13"
      height="13"
      uri="https://assets.v7-io.invisionapp.com/assets/A_MGFjZjlkZDY2YjhlM2JmOShEcF79uq5szmO9jhX7eRgk4ac3VvF1oEDUbCOk__hEDERlpM1PLz2715GasgbB-h1XE_WxRsjuq7-kE-COvYp-_FMfbjCSMWFVkZIy3End?filename=clock%20(1).svg"
    />
  );
}
