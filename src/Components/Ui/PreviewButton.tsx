
const PreviewButton = ({ link }: { link: string }) => {
    const { t } = useTranslation();
    return (
        <div className='preview_button'>
            <Link to={link}>
                <p>{t("Preview")}</p>
            </Link>
        </div>
    );
};

export default PreviewButton;
