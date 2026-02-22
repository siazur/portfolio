

const Contacts = () => {
    return (
        <main className="section">
            <div className="container">
                    <h1 className="title-1">Contacts</h1>

                    <ul className="content-list">
                        <li className="content-list__item">
                            <h2 className="title-2">Location</h2>
                            <p>Moscow, Russia</p>
                        </li>
                        <li className="content-list__item">
                            <h2 className="title-2">Telegram</h2>
                            <p><a href="tel:+79243407368">+7 (924) 340-73-68</a></p>
                            <p><a href="https://t.me/siazur">@siazur</a></p>
                        </li>
                        <li className="content-list__item">
                            <h2 className="title-2">Email</h2>
                            <p><a href="mailto:mazurnastya28@mail.ru">mazurnastya28@mail.ru</a></p>
                        </li>
                    </ul>

            </div>
        </main>

    );
};

export default Contacts;