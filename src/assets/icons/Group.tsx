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
        <Svg height={props.height} width={props.width} viewBox="0 0 375 374.999991" preserveAspectRatio="xMidYMid meet"><Defs><ClipPath id="eddba62904"><Path d="M 110 149 L 266 149 L 266 310.839844 L 110 310.839844 Z M 110 149 " clip-rule="nonzero"/></ClipPath></Defs><G clip-path="url(#eddba62904)"><Path fill={props.iconColor} d="M 160.878906 238.105469 C 144.921875 226.152344 138.035156 210.554688 140.089844 191.34375 C 141.347656 179.605469 146.667969 169.652344 155.414062 161.84375 C 175.746094 143.714844 206.03125 145.464844 224.441406 165.722656 C 238.640625 181.355469 244.667969 215.6875 215.40625 238.3125 C 224.980469 242.828125 233.96875 247.742188 241.425781 255.050781 C 248.949219 262.414062 255.125 270.632812 259.242188 280.347656 C 263.332031 289.980469 265.691406 299.945312 265.527344 310.785156 L 253.957031 310.785156 C 253.632812 309.292969 253.066406 307.691406 252.949219 306.058594 C 250.875 277.460938 228.890625 252.109375 198.660156 246.992188 C 161.578125 240.722656 126.308594 267.910156 123.015625 305.867188 C 122.886719 307.398438 122.632812 308.949219 122.386719 310.777344 L 111.046875 310.777344 C 110.917969 308.820312 110.546875 306.835938 110.699219 304.894531 C 112.011719 288.210938 118.191406 273.523438 129.042969 260.777344 C 136.515625 252.007812 145.589844 245.378906 156.039062 240.570312 C 157.4375 239.929688 158.785156 239.179688 160.878906 238.105469 Z M 187.8125 233.328125 C 205.433594 234.5 224.148438 219.097656 224.003906 197.683594 C 223.863281 177.160156 207.914062 162.023438 188.246094 161.875 C 167.375 161.710938 152.074219 178.773438 152.066406 197.75 C 152.039062 218.46875 170.003906 234.234375 187.8125 233.328125 Z M 187.8125 233.328125 " fill-opacity="1" fill-rule="nonzero"/></G><Path fill={props.iconColor} d="M 126.058594 201.285156 C 126.707031 205.660156 127.257812 209.367188 127.898438 213.667969 C 109.359375 213.078125 92.964844 218.367188 79.320312 230.734375 C 65.585938 243.179688 58.800781 259.046875 57.59375 277.777344 L 45.742188 277.777344 C 45.5 261.664062 50.335938 247.355469 59.410156 234.457031 C 68.480469 221.558594 80.53125 212.15625 96.023438 206.023438 C 79.550781 193.050781 72.105469 176.832031 75.523438 156.480469 C 77.777344 143.050781 84.90625 132.394531 96.210938 125.027344 C 121.941406 108.234375 152.367188 119.289062 164.421875 140.445312 C 162.664062 141.347656 160.898438 142.238281 159.144531 143.160156 C 157.390625 144.082031 155.597656 145.074219 153.558594 146.179688 C 147.492188 137.410156 139.351562 131.730469 128.96875 129.953125 C 125.371094 129.300781 121.765625 129.226562 118.144531 129.726562 C 114.523438 130.226562 111.070312 131.28125 107.785156 132.882812 C 93.527344 139.824219 85.347656 154.839844 87.484375 170.058594 C 88.816406 179.578125 93.359375 187.25 100.726562 193.246094 C 107.945312 199.136719 116.480469 201.464844 126.058594 201.285156 Z M 126.058594 201.285156 " fill-opacity="1" fill-rule="nonzero"/><Path fill={props.iconColor} d="M 222.265625 146.011719 L 211.484375 140.335938 C 220.238281 126.332031 232.660156 118.328125 248.839844 117.179688 C 270.085938 115.675781 286.816406 124.488281 295.984375 143.613281 C 307.476562 167.605469 300.90625 188.457031 280.472656 205.796875 C 282.253906 206.761719 283.664062 207.605469 285.136719 208.316406 C 310.089844 220.304688 324.953125 239.910156 329.730469 267.125 C 330.320312 270.460938 330.148438 273.933594 330.351562 277.785156 L 318.9375 277.785156 C 313.535156 236.992188 290.207031 215.417969 248.230469 213.125 C 248.8125 209.433594 249.429688 205.535156 250.097656 201.304688 C 261.417969 201.496094 271.089844 198.042969 278.855469 190.027344 C 284.289062 184.417969 287.476562 177.652344 288.644531 169.988281 C 290.867188 155.378906 282.132812 139.464844 268.578125 133.019531 C 256 127.015625 236.726562 127.089844 222.265625 146.011719 Z M 222.265625 146.011719 " fill-opacity="1" fill-rule="nonzero"/><Path fill={props.iconColor} d="M 11.601562 232.601562 L 6.167969 232.601562 C 0.289062 232.601562 -0.203125 232.21875 0.421875 226.480469 C 2.429688 207.839844 9.78125 191.597656 23.152344 178.375 C 30.234375 171.367188 38.425781 165.75 47.765625 161.984375 C 48.480469 161.699219 49.140625 161.277344 50.394531 160.617188 C 49.246094 159.402344 48.453125 158.324219 47.445312 157.492188 C 33.929688 146.234375 27.996094 131.699219 29.824219 114.386719 C 31.480469 98.566406 39.566406 86.324219 53.355469 78.230469 C 72.046875 67.289062 94.34375 70.039062 110.257812 84.355469 C 113.507812 87.28125 116.4375 90.546875 118.472656 94.933594 L 108.46875 100.269531 C 107.417969 99.144531 106.347656 98.0625 105.347656 96.925781 C 94.933594 85.097656 81.851562 81.175781 66.96875 85.609375 C 51.902344 90.101562 43.359375 101.15625 41.617188 116.566406 C 40.132812 129.722656 45.550781 140.511719 56.054688 148.652344 C 57.171875 149.527344 58.355469 150.304688 59.609375 150.976562 C 61.757812 152.125 62.125 153.78125 61.90625 156.085938 C 61.578125 159.511719 61.507812 162.941406 61.699219 166.375 C 61.894531 169.683594 61.953125 170.089844 58.632812 171.050781 C 54.078125 172.378906 49.730469 174.203125 45.589844 176.523438 C 41.449219 178.84375 37.625 181.605469 34.117188 184.800781 C 22.21875 195.511719 14.992188 208.816406 12.792969 224.746094 C 12.507812 227.066406 12.109375 229.378906 11.601562 232.601562 Z M 11.601562 232.601562 " fill-opacity="1" fill-rule="nonzero"/><Path fill={props.iconColor} d="M 267.535156 100.292969 L 257.855469 95.097656 C 265.363281 78.175781 292.980469 64.132812 318.4375 76.03125 C 329.144531 81.035156 337.085938 88.847656 342.085938 99.472656 C 347.152344 110.253906 347.898438 121.589844 344.765625 133.003906 C 341.703125 144.203125 334.9375 153.125 325.503906 160.066406 C 331.832031 163.726562 337.679688 166.527344 342.882812 170.222656 C 359.773438 182.222656 370.511719 198.390625 374.363281 218.863281 C 375.023438 222.394531 375.128906 226.027344 375.40625 229.625 C 375.546875 231.503906 374.617188 232.605469 372.617188 232.574219 C 372.453125 232.574219 372.296875 232.574219 372.140625 232.574219 C 364.574219 233.171875 364.546875 233.152344 363.460938 225.75 C 360.476562 205.472656 350.609375 189.476562 333.273438 178.390625 C 329.210938 175.789062 324.5625 174.074219 320.140625 172.054688 C 318.308594 171.214844 316.359375 170.644531 314.332031 169.902344 L 314.332031 152.34375 C 325.441406 146.199219 332.914062 136.90625 334.328125 123.683594 C 335.476562 112.789062 332.125 103.171875 324.65625 95.097656 C 311.816406 81.230469 284.640625 77.523438 267.535156 100.292969 Z M 267.535156 100.292969 " fill-opacity="1" fill-rule="nonzero"/><Path fill={props.iconColor} d="M 234.21875 107.277344 L 223.539062 111.992188 C 217.0625 93.03125 204.417969 82.417969 183.949219 84.296875 C 167.339844 85.828125 157.730469 96.492188 152.484375 111.957031 L 142.109375 107.511719 C 144.023438 92.25 160.730469 73.84375 183.347656 71.808594 C 209.015625 69.488281 229.015625 86.546875 234.21875 107.277344 Z M 234.21875 107.277344 " fill-opacity="1" fill-rule="nonzero"/></Svg>

    )
}

export default SvgComponent