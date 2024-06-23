import PackageBreadcrumb from './PackageBreadcrumb'

export default function layout({children}) {

  return (
        <div>
            <PackageBreadcrumb />
            {children}
        </div>
  )
}
