import React, {useEffect} from "react";
import {observer} from "mobx-react";
import styles from "./TournamentsPage.module.css"
import TournamentItemComponent from "./item/TournamentItemComponent.tsx";
import {Button, Radio, Space} from "antd";
import {
    AppstoreAddOutlined,
    PlusCircleFilled,
    PlusCircleOutlined,
    PlusCircleTwoTone,
    PlusOutlined
} from "@ant-design/icons";


const TournamentsPage = () => {

    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]


    return (
        <>
            <div className={styles.tournaments_page_content}>
                <div className={styles.tournaments_list}>
                    {
                        data.map((ind) => {
                            return (<TournamentItemComponent/>)
                        })
                    }
                </div>
                <TournamentsFilters/>
            </div>
        </>
    );
};

const TournamentsFilters = () => {
    return (
        <div className={styles.tournaments_buttons_container}>
            <div className={styles.tournaments_filters_buttons_container} defaultValue={1}>
                <button className={styles.tournaments_filter_button} value={1}>Активные</button>
                <button className={styles.tournaments_filter_button} value={2}>Предстоящие</button>
                <button className={styles.tournaments_filter_button} value={3}>Закончились</button>
            </div>

            <button className={styles.tournaments_create_new_button}>
                <AppstoreAddOutlined/>
                <text className={styles.tournaments_create_new_button_text}>Создать турнир</text>
            </button>
        </div>
    )
}

export default observer(TournamentsPage);
