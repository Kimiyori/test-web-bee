import { AddressElement } from '../components/core/AddressElement/AddressElement';
import { ArticleWrapper } from '../components/core/ArticleWrapper/ArticleWrapper';
import ResumeImage from '../assets/img/abstractimg.jpeg';
import SkillList from '../components/core/SkillList/SkillList';
import { usePageTitle } from '../hooks/UseTitle';
import { UserSummary } from '../components/core/SideBar/SideBarUserInfo';
import { SideBarNavigation } from '../components/core/SideBar/SideBarNavigation/SideBarNavigation';
import { SideBarComments } from '../components/core/SideBar/SideBarComments';
import { addresses, skillsList } from 'data/resume';
import { Fragment } from 'react';

const ActivityPage = () => {
  usePageTitle('Resume');
  return (
    <>
      <main className="bg-light m-lg-5 m-2">
        <div className="row">
          <section className="col d-flex flex-column gap-4 h-100">
            <ArticleWrapper>
              <div className="position-relative">
                <img src={ResumeImage} className="w-100 object-fit-cover" alt="Resume" />
                <h6 className="position-absolute top-50 start-50 translate-middle text-white w-100 bg-body-secondary bg-opacity-50 text-center">
                  Resume
                </h6>
              </div>
              <hr className="solid" />
              <address className="d-flex flex-column flex-sm-row gap-4 justify-content-evenly mb-0">
                {addresses.map((address, i) => (
                  <AddressElement
                    key={i}
                    name={address.name}
                    url={address.url}
                    img={{
                      src: address.img.src,
                      alt: address.img.alt,
                    }}
                  />
                ))}
              </address>
            </ArticleWrapper>
            <ArticleWrapper>
              <h2 className="mb-4 bg-body-secondary p-2">Skills</h2>
              {skillsList.map((element, i) => (
                <Fragment key={i}>
                  <hr className="solid" />
                  <SkillList title={element.title} skills={element.skills} />
                </Fragment>
              ))}
            </ArticleWrapper>
          </section>
          <div
            className="col-2 offcanvas-lg offcanvas-end bg-light"
            id="offcanvasResponsive"
            aria-labelledby="offcanvasResponsiveLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasResponsiveLabel">
                Side menu
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                data-bs-target="#offcanvasResponsive"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body flex-column">
              <UserSummary />
              <SideBarNavigation />
              <SideBarComments />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ActivityPage;
