import * as React from "react"
import Svg, {Path, G, Rect, ClipPath, Defs} from "react-native-svg"

interface Props {
    iconColor?: string
    width?: number
    height?:number
    style?:object

}

function SvgComponent(props: Props) {
    return (
        <Svg  height={props.height} width={props.width} viewBox="0 0 375 374.999991" preserveAspectRatio="xMidYMid meet"><Path fill={props.iconColor} d="M 158.488281 133.796875 C 155.253906 122.34375 149.613281 111.214844 144.757812 100.363281 C 140.132812 89.96875 135.234375 79.71875 130.101562 69.605469 C 119.839844 49.332031 108.511719 29.5625 96.351562 10.351562 C 90.621094 1.300781 76.101562 0.101562 70.648438 10.351562 C 59.597656 31.089844 48.363281 51.640625 36.945312 72.144531 C 31.351562 82.257812 26.125 92.511719 20.996094 102.902344 C 18.40625 108.210938 15.722656 113.429688 13.550781 118.878906 C 11.378906 124.238281 8.417969 129.6875 8.417969 135.550781 C 8.417969 140.632812 14.058594 143.773438 18.40625 141.277344 C 23.445312 138.414062 26.726562 133.152344 30.285156 128.671875 C 33.707031 124.375 36.757812 119.804688 39.8125 115.277344 C 46.515625 105.347656 53.078125 95.464844 59.273438 85.261719 C 62.09375 80.640625 64.960938 76.023438 67.78125 71.359375 C 67.6875 72.929688 67.640625 74.453125 67.503906 75.886719 C 66.671875 86.230469 65.886719 96.527344 65.332031 106.917969 C 64.3125 127.609375 62.972656 148.253906 62.1875 168.941406 C 60.660156 209.90625 59.226562 250.871094 57.5625 291.832031 C 57.101562 303.332031 56.640625 314.785156 56.363281 326.285156 C 56.039062 339.125 53.863281 354.59375 62.972656 364.894531 C 67.964844 370.574219 77.722656 369.972656 82.851562 364.894531 C 91.359375 356.394531 90.664062 342.078125 91.082031 330.855469 C 91.453125 320.511719 91.730469 310.167969 91.914062 299.867188 C 92.285156 279.179688 92.609375 258.535156 92.886719 237.847656 C 93.484375 196.882812 93.761719 155.917969 93.394531 114.957031 C 93.300781 103.457031 93.070312 92.003906 92.5625 80.503906 C 92.332031 74.777344 92.191406 69.003906 91.820312 63.277344 C 95.519531 70.25 99.125 77.316406 102.546875 84.476562 C 107.03125 93.804688 111.332031 103.226562 115.398438 112.738281 C 120.117188 123.777344 123.722656 135.460938 128.992188 146.21875 C 137.128906 162.800781 163.296875 151.117188 158.441406 133.796875 Z M 158.488281 133.796875 " fill-opacity="1" fill-rule="nonzero"/><Path fill={props.iconColor} d="M 361.816406 256.226562 C 363.941406 250.871094 366.902344 245.421875 366.902344 239.601562 C 366.902344 234.519531 361.261719 231.378906 356.914062 233.875 C 351.875 236.738281 348.640625 242.003906 345.035156 246.480469 C 341.613281 250.777344 338.5625 255.347656 335.511719 259.875 C 328.808594 269.804688 322.242188 279.6875 316.046875 289.894531 C 313.226562 294.511719 310.359375 299.128906 307.539062 303.792969 C 307.632812 302.222656 307.679688 300.699219 307.816406 299.269531 C 308.648438 288.921875 309.4375 278.625 309.992188 268.234375 C 311.007812 247.542969 312.347656 226.902344 313.132812 206.210938 C 314.660156 165.246094 316.09375 124.285156 317.757812 83.320312 C 318.21875 71.820312 318.683594 60.367188 318.960938 48.867188 C 319.28125 36.03125 321.457031 20.558594 312.347656 10.261719 C 307.355469 4.578125 297.601562 5.179688 292.515625 10.261719 C 284.007812 18.757812 284.703125 33.074219 284.285156 44.296875 C 283.914062 54.640625 283.636719 64.984375 283.453125 75.285156 C 283.082031 95.972656 282.761719 116.617188 282.484375 137.308594 C 281.882812 178.269531 281.605469 219.234375 281.972656 260.199219 C 282.066406 271.699219 282.296875 283.152344 282.804688 294.648438 C 283.039062 300.375 283.175781 306.148438 283.546875 311.875 C 283.546875 311.875 283.546875 311.875 283.546875 311.921875 C 279.847656 304.902344 276.242188 297.835938 272.820312 290.679688 C 268.335938 281.351562 264.035156 271.929688 259.96875 262.414062 C 255.25 251.378906 251.644531 239.695312 246.375 228.933594 C 238.238281 212.351562 212.070312 224.039062 216.925781 241.355469 C 220.160156 252.808594 225.800781 263.9375 230.65625 274.792969 C 235.28125 285.183594 240.179688 295.433594 245.3125 305.550781 C 255.574219 325.824219 266.902344 345.589844 279.0625 364.800781 C 284.792969 373.851562 299.3125 375.054688 304.765625 364.800781 C 315.816406 344.066406 327.050781 323.515625 338.46875 303.007812 C 344.0625 292.894531 349.289062 282.644531 354.417969 272.25 C 357.007812 266.988281 359.691406 261.722656 361.863281 256.273438 Z M 361.816406 256.226562 " fill-opacity="1" fill-rule="nonzero"/></Svg>
    )}

export default SvgComponent