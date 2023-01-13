import { AppBase } from "src/components/types";

interface Props {
    icon?: string;
    name?: string;
    desc?: string;
    appBase: AppBase;
}

export default function ExploreApp({ icon, name, desc, appBase }: Props) {
    const navigate = () => {
        if (appBase?.url) {
            window.open(appBase.url)
        }
    }

    return <div className='app_card_container'>
        <div className='app_card disable'>
            <img className='app_card_icon' src={appBase.picture} />
            <div className='app_card_content'>
                <div className='app_card_content_text'>
                    <div className='app_card_content_text_top'>{appBase.name}</div>
                    <div className='app_card_content_text_bottom'>
                        {appBase.description}
                    </div>
                </div>
                
            </div>
        </div>
        <div className='app_card_content_button' onClick={navigate}>
            Activate
        </div>
    </div>
}