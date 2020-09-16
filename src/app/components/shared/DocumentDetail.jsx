import React from 'react';

import { t } from '../../i18n';

import Diva from '../wrappers/Diva.jsx';
import ActionLink from '../template/components/ActionLink.jsx';

import './DocumentDetail.scss';

const DocumentDetail = ({ selectedResource, unsetSearchSelected, goBackHidden }) => {
    const element = selectedResource;

    if (!element) {
        return <div>
            <h3>Resource not found</h3>
        </div>;
    }

    return (
        <div className="documentDetail-root">
            {
                unsetSearchSelected && goBackHidden == undefined && (
                    <ActionLink action={unsetSearchSelected}>
                        {t('browse.back')}
                    </ActionLink>
                )
            }

            <div className="documentDetail-wrapper">
                <div className="documentDetail-divaWrapper">
                    <Diva manifest={element.id} />
                </div>

                <div className="documentDetail-metadata">
                    <h3>{element.title_s}</h3>
                    <h4>
                        {element.date_dts ? element.date_dts.map(element => new Date(element).toLocaleDateString("fr-CH")).join(", ") : "none"}
                    </h4>
                    <div>
                    {element.place_ss && (
                            <React.Fragment>
                                <h4>{t('show.places')}</h4>
                                {element.place_ss.map(
                                    (place, index) => (
                                        <div key={index}>
                                            {place}
                                        </div>
                                    )
                                )}
                            </React.Fragment>
                        )}
                        {element.composer_ss && (
                            <React.Fragment>
                                <h4>{t('show.composers')}</h4>
                                {element.composer_ss.map(
                                    (composer, index) => (
                                        <div key={index}>
                                            {composer}
                                        </div>
                                    )
                                )}
                            </React.Fragment>
                        )}
                        {element.interpreter_ss && (
                            <React.Fragment>
                                <br />
                                <h4>{t('show.interpreters')}</h4>
                                {element.interpreter_ss.map(
                                    (interpreter, index) => (
                                        <div key={index}>
                                            {interpreter}
                                        </div>
                                    )
                                )}
                            </React.Fragment>
                        )}
                        {element.note_ss && (
                            <React.Fragment>
                                <br />
                                <h4>{t('show.notes')}</h4>
                                {element.note_ss.map(
                                    (note, index) => (
                                        <div key={index}>
                                            {note}
                                        </div>
                                    )
                                )}
                            </React.Fragment>
                        )}
                        {element.idno_ss && (
                            <React.Fragment>
                                <br />
                                <h4>{t('show.idno')}</h4>
                                {element.idno_ss.map(
                                    (idno, index) => (
                                        <div key={index}>
                                            {idno}
                                        </div>
                                    )
                                )}
                            </React.Fragment>
                        )}
                        <React.Fragment>
                            <br />
                            <h4>{t('show.collection')}</h4>
                            {t(`common.collections.${element.collection_s}`)}
                        </React.Fragment>
                        

                    </div>
                </div>

            </div>

        </div>
    );
};

export default DocumentDetail;