interface Props {
    icon?: string;
    name?: string;
    desc?: string;
}

export default function ExploreApp({ icon, name, desc }: Props) {
    return <div className='app_card_container'>
        <div className='app_card'>
            <img className='app_card_icon' src={icon} />
            <div className='app_card_content'>
                <div className='app_card_content_text'>
                    <div className='app_card_content_text_top'>{name}</div>
                    <div className='app_card_content_text_bottom'>
                        {desc}
                    </div>
                </div>
                <div className='app_card_content_button'>
                    Activate
                </div>
            </div>
        </div>
    </div>
}