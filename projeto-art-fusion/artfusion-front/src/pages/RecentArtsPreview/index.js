import React, { useState } from 'react';
import SideBar from '../../components/SideBar'
import styled from "styled-components"

import Title from '../../components/Title'
import Button from '../../components/Button';
import TopBar from '../../components/TopBar'
import Card from '../../components/Card'
import NewArtModal from '../../modals/NewArtModal';

import ContainerTitleButton from '../../components/Containers/ContainerTitleButton'
import ContainerArtesRecentesAbertasVisualizacao from '../../components/Containers/ContainerArtesRecentesAbertasVisualizacao'


const ConteinerArtesRecentesSideBar = styled.div`
    display: flex;
`

const ContainerArtesRecentes = styled.div`
    width: 81vw; 
    height: 100vh;
    margin-left: 256px;
`

const RecentArtsPreview = () => {
    const [isNewArtModalOpen, setNewArtModalOpen] = useState(false);

    return (
        <div>
            <ConteinerArtesRecentesSideBar>
                <ContainerArtesRecentes>
                    <ContainerTitleButton>
                        <Title align={"left"}>Artes Recentes</Title>
                        <Button
                            width={"15%"}
                            Text={"+ Nova Arte"}
                            onClick={() => setNewArtModalOpen(true)}
                        />
                    </ContainerTitleButton>

                    <ContainerArtesRecentesAbertasVisualizacao></ContainerArtesRecentesAbertasVisualizacao>

                </ContainerArtesRecentes>
                <SideBar></SideBar>
            </ConteinerArtesRecentesSideBar>

            {isNewArtModalOpen && (
                <NewArtModal
                    onClose={() => setNewArtModalOpen(false)}
                />
            )}
        </div>
    );
};

export default RecentArtsPreview;
