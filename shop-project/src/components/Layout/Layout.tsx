import { ReactNode } from 'react'

type LayoutProps = {
    children: ReactNode;
    header: ReactNode;
}

const Layout = ({ children, header }: LayoutProps): JSX.Element => {
    return (
        <div>
            <>{header}</>
            <main>{children}</main>
        </div>
    )
}

export default Layout