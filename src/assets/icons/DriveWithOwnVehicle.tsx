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

        <Svg height={props.height} width={props.width} viewBox="0 0 375 374.999991" preserveAspectRatio="xMidYMid meet"><Defs><ClipPath id="7e3f3b1282"><Path d="M 7.316406 103.234375 L 265.570312 103.234375 L 265.570312 297.296875 L 7.316406 297.296875 Z M 7.316406 103.234375 " clip-rule="nonzero"/></ClipPath><ClipPath id="61d854505d"><Path d="M 305 77.625 L 347 77.625 L 347 118 L 305 118 Z M 305 77.625 " clip-rule="nonzero"/></ClipPath><ClipPath id="6a32bb1f7c"><Path d="M 284 123 L 367.632812 123 L 367.632812 297.296875 L 284 297.296875 Z M 284 123 " clip-rule="nonzero"/></ClipPath></Defs><G clip-path="url(#7e3f3b1282)"><Path fill={props.iconColor} d="M 244.027344 229.65625 C 244.027344 229.65625 237.96875 239.679688 230.242188 241.765625 C 222.511719 243.851562 209.007812 235.964844 209.007812 235.964844 C 228.832031 234.242188 245.75 221.320312 245.75 221.320312 Z M 185.195312 251.117188 C 183.710938 251.308594 148.773438 255.792969 136.332031 255.792969 C 136.292969 255.792969 136.257812 255.792969 136.222656 255.792969 C 124.296875 255.769531 90.386719 251.308594 88.949219 251.117188 C 86.433594 250.785156 84.667969 248.480469 85 245.96875 C 85.332031 243.457031 87.632812 241.691406 90.152344 242.023438 C 90.496094 242.066406 124.910156 246.59375 136.242188 246.621094 C 136.277344 246.621094 136.304688 246.621094 136.339844 246.621094 C 148.1875 246.621094 183.664062 242.066406 184.019531 242.019531 C 186.539062 241.691406 188.835938 243.46875 189.160156 245.980469 C 189.484375 248.496094 187.710938 250.796875 185.195312 251.117188 Z M 42.109375 241.765625 C 34.378906 239.679688 28.324219 229.65625 28.324219 229.65625 L 26.597656 221.320312 C 26.597656 221.320312 43.519531 234.242188 63.339844 235.964844 C 63.339844 235.964844 49.835938 243.851562 42.109375 241.765625 Z M 48.402344 133.199219 C 50.015625 127.265625 55.011719 122.886719 61.125 122.046875 C 78.214844 119.691406 110.023438 115.308594 136.058594 115.800781 C 136.101562 115.800781 136.140625 115.796875 136.183594 115.796875 C 136.21875 115.796875 136.253906 115.800781 136.292969 115.800781 C 162.328125 115.304688 194.136719 119.691406 211.226562 122.046875 C 217.339844 122.886719 222.335938 127.265625 223.949219 133.199219 L 239.070312 188.8125 L 33.277344 188.8125 Z M 265.035156 208.082031 C 265.035156 199.574219 259.515625 192.359375 251.863281 189.804688 C 251.84375 189.355469 251.78125 188.902344 251.65625 188.453125 L 235.757812 129.992188 C 232.855469 119.316406 223.882812 111.441406 212.898438 109.929688 C 195.503906 107.53125 163.136719 103.070312 136.175781 103.566406 C 109.207031 103.074219 76.851562 107.53125 59.453125 109.929688 C 48.46875 111.441406 39.496094 119.316406 36.59375 129.992188 L 20.691406 188.453125 C 20.570312 188.902344 20.503906 189.355469 20.488281 189.804688 C 12.835938 192.359375 7.316406 199.574219 7.316406 208.082031 C 7.316406 208.082031 8.558594 216.683594 10.683594 227.355469 C 8.601562 229.457031 7.316406 232.34375 7.316406 235.535156 L 7.316406 285.496094 C 7.316406 291.917969 12.527344 297.125 18.953125 297.125 L 34.46875 297.125 C 40.894531 297.125 46.105469 291.917969 46.105469 285.496094 L 46.105469 267.835938 L 226.359375 267.835938 L 226.359375 285.496094 C 226.359375 291.917969 231.566406 297.125 237.992188 297.125 L 253.511719 297.125 C 259.9375 297.125 265.148438 291.917969 265.148438 285.496094 L 265.148438 235.535156 C 265.148438 232.296875 263.820312 229.371094 261.6875 227.261719 C 263.796875 216.632812 265.035156 208.082031 265.035156 208.082031 " fill-opacity="1" fill-rule="nonzero"/></G><G clip-path="url(#61d854505d)"><Path fill={props.iconColor} d="M 325.9375 117.875 C 337.078125 117.875 346.113281 108.84375 346.113281 97.710938 C 346.113281 86.574219 337.078125 77.546875 325.9375 77.546875 C 314.792969 77.546875 305.761719 86.574219 305.761719 97.710938 C 305.761719 108.84375 314.792969 117.875 325.9375 117.875 " fill-opacity="1" fill-rule="nonzero"/></G><G clip-path="url(#6a32bb1f7c)"><Path fill={props.iconColor} d="M 367.632812 143.414062 C 367.632812 132.324219 358.550781 123.25 347.457031 123.25 L 304.417969 123.25 C 293.320312 123.25 284.242188 132.324219 284.242188 143.414062 L 284.242188 211.347656 C 284.242188 215.382812 287.546875 218.6875 291.585938 218.6875 L 295.550781 218.6875 L 295.550781 145.429688 C 295.550781 144.246094 296.507812 143.289062 297.691406 143.289062 C 298.875 143.289062 299.835938 144.246094 299.835938 145.429688 L 299.835938 295.148438 C 301.164062 296.488281 303.007812 297.324219 305.035156 297.324219 L 323.792969 297.324219 L 323.792969 205.703125 C 323.792969 204.519531 324.753906 203.5625 325.9375 203.5625 C 327.121094 203.5625 328.078125 204.519531 328.078125 205.703125 L 328.078125 297.324219 L 346.839844 297.324219 C 348.867188 297.324219 350.707031 296.488281 352.039062 295.152344 L 352.039062 145.429688 C 352.039062 144.246094 353 143.289062 354.183594 143.289062 C 355.363281 143.289062 356.324219 144.246094 356.324219 145.429688 L 356.324219 218.6875 L 360.289062 218.6875 C 360.597656 218.6875 360.90625 218.664062 361.207031 218.625 C 361.472656 218.664062 361.738281 218.6875 362.011719 218.6875 C 365.113281 218.6875 367.632812 216.171875 367.632812 213.070312 C 367.632812 212.796875 367.605469 212.53125 367.566406 212.265625 C 367.605469 211.964844 367.632812 211.660156 367.632812 211.347656 L 367.632812 143.414062 " fill-opacity="1" fill-rule="nonzero"/></G></Svg>
    )
}

export default SvgComponent
