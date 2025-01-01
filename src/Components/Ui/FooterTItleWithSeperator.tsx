const FooterTItleWithSeparator = ({ title }: { title: string }) => {
    const {t} = useTranslation()
  return (
    <div className='FooterTItleWithSeparator'>
        <h1>{t(title)}</h1>
        <hr />
    </div>
  )
}

export default FooterTItleWithSeparator;
