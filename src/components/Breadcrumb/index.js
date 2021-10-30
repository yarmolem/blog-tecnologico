import Link from 'next/link'

const Breadcrumb = ({ crumbs }) => {
  return (
    <div className="flex items-center   text-base">
      {
        crumbs.map(({ label, path }, key) => key === crumbs.length - 1 ? (<span className="font-mono text-primary-500  my-auto" key={key}>{label}</span>) : (<span className="flex items-center dark:text-secondary-500"><Link className="text-primary-500 my-auto " key={key} href={path}>{label}</Link><p className="mx-1 md:mx-2 text-primary-500  text-base  my-auto">{'>'}</p></span>))}
    </div>
  )
}

export default Breadcrumb
