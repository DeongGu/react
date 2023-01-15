// react17 버전까지
// import type {FC, ReactNode} from "react"

// export type PProps = {
//   children?: ReactNode
// }

// const P: FC<PProps> = props => {
//   const {children} = props
//   return <p children={children}></p>
// }

// react 18 버전 부터
import {FC, PropsWithChildren} from "react"

export type PProps = {}
const P: FC<PropsWithChildren<PProps>> = props => {
  return <p {...props} />
}

export default P
