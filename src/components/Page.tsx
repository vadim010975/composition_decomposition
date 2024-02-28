import Header from "./Header/Header";
import HeaderBody from "./Header/HeaderBody";
import HeaderTitle from "./Header/HeaderTitle";
import TitleChapter from "./Header/TitleChapter";
import HeaderContent from "./Header/HeaderContent";
import NewsHeadline from "./Header/NewsHeadline";
import HeaderFooter from "./Header/HeaderFooter";
import ExchangeRate from "./Header/ExchangeRate";
import HeaderAside from "./Header/HeaderAside";
import WorkOnMistakes from "./Header/WorkOnMistakes";
import Main from "./Main/Main";
import MainNavigation from "./Main/MainNavigation";
import NavigationPage from "./Main/NavigationPage";
import SearchForm from "./Main/SearchForm";
import MovieAdvertisement from "./Main/MovieAdvertisement";
import Footer from "./Footer/Footer";
import { Section } from "./Footer/Section";
import Weather from "./Footer/Weather";
import VisitedSectionString from "./Footer/VisitedSectionString";
import MapSectionString from "./Footer/MapSectionString";
import TVProgramSectionString from "./Footer/TVProgramSectionString";
import EtherSectionString from "./Footer/EtherSectionString";

const Page = () => {
  return (
    <>
      <Header>
        <HeaderBody>
          <HeaderTitle>
            <TitleChapter title="Сейчас в СМИ" link="#" />
            <TitleChapter title="в Германии" link="#" />
            <TitleChapter title="Рекомендуем" link="#" />
          </HeaderTitle>
          <HeaderContent>
            <NewsHeadline img="" title="Путин упростил получение автомобильных номеров" link="#" />
            <NewsHeadline img="" title="В команде Зеленского раскрыли план реформ на Украине" link="#" />
            <NewsHeadline img="" title="'Турпомощь' прокоментировала гибель десятков россиян в Анталье" link="#" />
            <NewsHeadline img="" title="Суд закрыл дело Демпартии США против Росии" link="#" />
            <NewsHeadline img="" title="На Украине призвали создать ракеты для ударов по Москве" link="#" />
          </HeaderContent>
          <HeaderFooter>
            <ExchangeRate subjectBidding="USD MOEX" price={63.52} changePerDay="+0,09" />
            <ExchangeRate subjectBidding="EUR MOEX" price={70.86} changePerDay="+0,14" />
            <ExchangeRate subjectBidding="НЕФТЬ" price={64.90} changePerDay="+1,63%" />
          </HeaderFooter>
        </HeaderBody>
        <HeaderAside>
          <WorkOnMistakes img="" link="#" title="Работа над ошибкаами" finalText="Смотрите на Яндексе и запоминайте" />
        </HeaderAside>
      </Header>
      <Main>
        <MainNavigation>
          <NavigationPage pageName="Видео" link="#" />
          <NavigationPage pageName="Картинки" link="#" />
          <NavigationPage pageName="Новости" link="#" />
          <NavigationPage pageName="Карты" link="#" />
          <NavigationPage pageName="Маркет" link="#" />
          <NavigationPage pageName="Переводчик" link="#" />
          <NavigationPage pageName="Эфир" link="#" />
          <NavigationPage pageName="ещё" link="#" />
        </MainNavigation>
        <SearchForm link="#" />
        <MovieAdvertisement img="" />
      </Main>
      <Footer>
        <Section link="#" title="Погода">
          <Weather img="" temperatureNow="+17" temperatureMorning="+17" temperatureDay="+20" />
        </Section>
        <Section link="#" title="Посещаемые">
          <VisitedSectionString title="Недвижимость" text="о сталинках" />
          <VisitedSectionString title="Маркет" text="люстры и светильники" />
          <VisitedSectionString title="Авто.ру" text="привод 4х4 до 500 000" />
        </Section>
        <Section link="#" title="Карта Германии">
          <MapSectionString title="Расписания" />
        </Section>
        <Section link="#" title="Телепрограмма" button={{ link: "#", img: "", title: "Эфир" }}>
          <TVProgramSectionString time="02:00" title="ТНТ.Best" text="ТНТ International" />
          <TVProgramSectionString time="02:15" title="Джинглики" text="Карусель INT" />
          <TVProgramSectionString time="02:25" title="Наедине со всеми" text="Первый" />
        </Section>
        <Section link="#" title="Эфир">
          <EtherSectionString title="Управление как искусство" text="Успех" />
          <EtherSectionString title="Ночь. Мир в это время" text="earthTV" />
          <EtherSectionString title="Андрей Возн..." text="Совершенно секретно" />
        </Section>
      </Footer>
    </>
  );
}

export default Page;