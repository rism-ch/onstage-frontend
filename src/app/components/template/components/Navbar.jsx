import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import GlobalContext from '../../../context/globalContext';
import DropdownMenu from './DropdownMenu.jsx';

import { t } from '../../../i18n';



export const Navbar = () => {
    const { language, setLanguage } = useContext(GlobalContext);

    const changeLanguage = lang => e => {
        e.preventDefault();
        setLanguage(lang);
        window.location.reload();
    };

    return (
        <div className="navbar-root">
            <Link to="/">
                <img src="https://raw.githubusercontent.com/rism-ch/onstage-texts/master/images/logo_trans-75-b.png" style={{ maxHeight: '38px' }} />
            </Link>
            <div className="navbar-menu">
                <DropdownMenu label={t('common.topMenu.pages.label')} items={[
                    <Link to="/">{t('common.topMenu.pages.items.home')}</Link>,
                    <Link to="/page/about">{t('common.topMenu.pages.items.about')}</Link>,
                    <Link to="/page/lausanne">{t('common.topMenu.pages.items.fundsLosanne')}</Link>,
                    <Link to="/page/geneve">{t('common.topMenu.pages.items.fundsGeneve')}</Link>,
                    <Link to="/page/la-musicale">{t('common.topMenu.pages.items.fundsGeneveMusicale')}</Link>,
                    <Link to="/page/basel">{t('common.topMenu.pages.items.collectionsBasel')}</Link>,
                    <Link to="/page/help">{t('common.topMenu.pages.items.help')}</Link>,
                ]} />

                <DropdownMenu label={t('common.topMenu.languages.label')} items={[
                    language === 'fr'
                        ? <span>Français</span>
                        : <a href="#" onClick={changeLanguage('fr')}>Français</a>
                    ,
                    language === 'de'
                        ? <span>Deutsch</span>
                        : <a href="#" onClick={changeLanguage('de')}>Deutsch</a>
                    ,
                    language === 'en'
                        ? <span>English</span>
                        : <a href="#" onClick={changeLanguage('en')}>English</a>
                    ,
                    language === 'it'
                        ? <span>Italiano</span>
                        : <a href="#" onClick={changeLanguage('it')}>Italiano</a>
                ]} />
            </div>
        </div>
    );
};