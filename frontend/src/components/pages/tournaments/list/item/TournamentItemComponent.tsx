import React, {useEffect} from "react";
import styles from "./TournamentItemComponent.module.css"
import {Row} from "antd";
import {TeamOutlined} from "@ant-design/icons";


interface TournamentItemProps {

}

const TournamentItemComponent: React.FC<TournamentItemProps> = props => {
    return (
        <div className={styles.tournament_item} onClick={() => {
        }}>
            <text className={styles.tournament_item_title}>Турнир по настольному футболу</text>
            <Row align={"middle"} style={{marginTop:"8px"}}>
                <text className={styles.tournament_item_dates}>22/10/2023 - 24/10/2023</text>
                <TeamOutlined style={{marginLeft:"16px"}}/>
                <text className={styles.tournament_item_max_teams}>Команд зарегестрировалось: 5 / 6</text>
            </Row>
        </div>
    );
};

export default TournamentItemComponent
