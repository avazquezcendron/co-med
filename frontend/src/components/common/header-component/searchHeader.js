import React, { useState, Fragment, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Search, User } from 'react-feather';
import { useSelector } from 'react-redux';
import debounce from 'lodash.debounce';

import * as patientService from '../../../services/patient.service';

const SearchHeader = () => {
  const { loggedUser } = useSelector((store) => store.UserLogin);

  const [searchResult, setSearchResult] = useState([]);
  const [searchOpen, setsearchOpen] = useState(false);
  const DEBOUNCE = 1000;

  const escFunction = useCallback((event) => {
    if (event.keyCode === 27) {
      //Do whatever when esc is pressed
      setsearchOpen(false);
      setSearchResult([]);
      removeFix();
    }
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', escFunction, false);
    return () => {
      document.removeEventListener('keydown', escFunction, false);
    };
  });

  const handleSearchKeyword = (keyword) => {
    patientService.getPatientsByFilter(keyword, loggedUser).then((patients) => {
      checkSearchResultEmpty(patients, keyword);
      setSearchResult(patients);
    });
  };

  const checkSearchResultEmpty = (items, keyword) => {
    if (items.length === 0 && keyword) {
      document.querySelector('.empty-menu').classList.add('is-open');
    } else {
      document.querySelector('.empty-menu').classList.remove('is-open');
    }
  };

  const debouncedSearch = debounce(handleSearchKeyword, DEBOUNCE);

  const onSearch = (keyword) => {
    const search = debouncedSearch;
    if (!keyword) {
      // when the user clear the field we don't want to perform a search, we need to clear the state and do nothing else
      debouncedSearch.cancel();
      removeFix();
      setSearchResult([]);
      checkSearchResultEmpty([], keyword);
    } else {
      addFix();
      search(keyword);
    }
  };

  const addFix = () => {
    document.querySelector('.Typeahead-menu').classList.add('is-open');
    document.body.classList.add('offcanvas');
  };

  const removeFix = () => {
    document.querySelector('.Typeahead-menu').classList.remove('is-open');
    document.querySelector('.empty-menu').classList.remove('is-open');
    document.body.classList.remove('offcanvas');
  };

  const toggleBtn = () => {
    if (searchOpen) {
      setsearchOpen(!searchOpen);
      document.querySelector('.searchIcon').classList.add('open');
    } else {
      setsearchOpen(!searchOpen);
      document.querySelector('.searchIcon').classList.remove('open');
    }
  };

  return (
    <Fragment>
      <div>
        <form className="form-inline search-form">
          <div className="form-group">
            <input
              className="form-control-plaintext searchIcon"
              type="text"
              placeholder="Buscar paciente por nombre, apellido o DNI..."
              onChange={(e) => onSearch(e.target.value)}
            />
            <span className="d-sm-none mobile-search" onClick={toggleBtn}>
              <Search />
            </span>

            <div className="Typeahead-menu custom-scrollbar" id="search-outer">
              {searchResult.length > 0
                ? searchResult.map((data, index) => {
                    return (
                      <div className="ProfileCard u-cf" key={index}>
                        <div className="ProfileCard-avatar">
                          <User />
                        </div>
                        <div className="ProfileCard-details  ml-4">
                          <div className="ProfileCard-realName">
                            <Link
                              to={`${process.env.PUBLIC_URL}/patient/${data.id}?mode=browse`}
                              className="realname"
                              onClick={removeFix}
                            >
                              {data.fullName}
                            </Link>
                          </div>
                        </div>
                      </div>
                    );
                  })
                : ''}
            </div>

            <div className="Typeahead-menu empty-menu">
              <div className="tt-dataset tt-dataset-0">
                <div className="EmptyMessage">
                  {'No se encontraron resultados.'}
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default SearchHeader;
