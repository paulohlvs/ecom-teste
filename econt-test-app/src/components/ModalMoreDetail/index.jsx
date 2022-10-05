import React, { useState } from 'react';
import { Button, Modal } from 'antd';


export default function ModalMoreDetail({ data }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <Button type="primary" onClick={showModal}>
                + Detalhes
            </Button>
            <Modal 
            title="Mais Detalhes " 
            open={isModalOpen} 
            footer={[
                <Button key="back" onClick={handleCancel}>
                    Fechar
                </Button>]}>
                <p><strong>Estado: </strong>{data.nome}  <strong>UF: </strong>{data.sigla}</p>
                <p><strong>Regiao: </strong>{data.regiao.sigla} - {data.regiao.nome} </p>
            </Modal>
        </>
    );
}