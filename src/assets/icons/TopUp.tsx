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
        <Svg height={props.height} width={props.width} viewBox="0 0 375 374.999991" preserveAspectRatio="xMidYMid meet" ><Defs><ClipPath id="b2bd1f2ae9"><Path d="M 2.449219 2.449219 L 372.199219 2.449219 L 372.199219 372.199219 L 2.449219 372.199219 Z M 2.449219 2.449219 " clip-rule="nonzero"/></ClipPath></Defs><G clip-path="url(#b2bd1f2ae9)"><Path fill={props.iconColor} d="M 260.8125 152.660156 C 256.6875 135.953125 243.5625 117.996094 216.210938 117.996094 C 194.164062 117.996094 185.023438 136.148438 179.085938 152.660156 L 137.824219 152.660156 C 142.863281 142.445312 154.300781 141.175781 158.507812 141.105469 C 164.851562 141.070312 169.992188 135.90625 169.992188 129.550781 C 169.992188 123.171875 164.816406 117.996094 158.4375 117.996094 C 142.144531 117.996094 118.910156 127.472656 113.421875 152.660156 L 106.441406 152.660156 C 100.0625 152.660156 94.886719 157.835938 94.886719 164.214844 C 94.886719 170.59375 100.0625 175.769531 106.441406 175.769531 L 113.421875 175.769531 C 118.910156 200.960938 142.144531 210.433594 158.4375 210.433594 C 180.484375 210.433594 189.625 192.28125 195.5625 175.769531 L 236.664062 175.769531 C 233.878906 181.605469 228.207031 187.324219 216.210938 187.324219 C 209.820312 187.324219 204.65625 192.5 204.65625 198.878906 C 204.65625 205.269531 209.820312 210.433594 216.210938 210.433594 C 243.5625 210.433594 256.699219 192.476562 260.8125 175.769531 L 268.207031 175.769531 C 274.597656 175.769531 279.761719 170.59375 279.761719 164.214844 C 279.761719 157.835938 274.597656 152.660156 268.207031 152.660156 Z M 158.4375 187.324219 C 155.433594 187.324219 143.164062 186.503906 137.859375 175.769531 L 170.699219 175.769531 C 167.230469 183.511719 163.789062 187.324219 158.4375 187.324219 Z M 203.941406 152.660156 C 207.40625 144.917969 210.863281 141.105469 216.210938 141.105469 C 228.125 141.105469 233.808594 146.769531 236.617188 152.660156 Z M 325.980469 187.324219 L 325.980469 37.113281 C 325.980469 11.683594 305.25 2.449219 291.316406 2.449219 L 83.332031 2.449219 C 57.902344 2.449219 48.667969 23.179688 48.667969 37.113281 L 48.667969 187.324219 L 2.449219 187.324219 L 2.449219 256.652344 L 372.199219 256.652344 L 372.199219 187.324219 Z M 48.667969 233.542969 L 25.558594 233.542969 L 25.558594 210.433594 L 48.667969 210.433594 Z M 71.777344 37.253906 C 71.917969 31.914062 74.03125 25.558594 83.332031 25.558594 L 92.761719 25.558594 C 89.273438 35.347656 81.566406 43.054688 71.777344 46.542969 Z M 302.871094 233.542969 L 71.777344 233.542969 L 71.777344 70.609375 C 94.378906 66 112.21875 48.160156 116.828125 25.558594 L 257.820312 25.558594 C 262.429688 48.160156 280.269531 66 302.871094 70.609375 Z M 302.871094 46.542969 C 293.085938 43.054688 285.378906 35.347656 281.886719 25.558594 L 291.179688 25.558594 C 296.515625 25.699219 302.871094 27.8125 302.871094 37.113281 Z M 349.089844 233.542969 L 325.980469 233.542969 L 325.980469 210.433594 L 349.089844 210.433594 Z M 241.710938 306.257812 C 246.230469 310.773438 246.230469 318.078125 241.710938 322.59375 L 195.492188 368.8125 C 193.242188 371.066406 190.28125 372.199219 187.324219 372.199219 C 184.367188 372.199219 181.410156 371.066406 179.15625 368.8125 L 132.9375 322.59375 C 128.417969 318.078125 128.417969 310.773438 132.9375 306.257812 C 137.453125 301.738281 144.757812 301.738281 149.273438 306.257812 L 175.769531 332.753906 L 175.769531 279.761719 C 175.769531 273.371094 180.945312 268.207031 187.324219 268.207031 C 193.703125 268.207031 198.878906 273.371094 198.878906 279.761719 L 198.878906 332.753906 L 225.375 306.257812 C 229.890625 301.738281 237.195312 301.738281 241.710938 306.257812 Z M 241.710938 306.257812 " fill-opacity="1" fill-rule="nonzero"/></G></Svg>    )
}

export default SvgComponent
