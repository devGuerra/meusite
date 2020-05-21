import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import api from '../../services/api';

import InputField from '../../Components/Input';
import { Button } from './styles';

function AddGroup({ history }) {
  const [group, setGroup] = useState({});
  const [categories, setCategories] = useState([]);
  const [url, setUrl] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    api
      .get('/category')
      .then((response) => setCategories(response.data.CategoryList));
  }, []);

  const handleSearch = () => {
    if (!url) return;

    if (!url.includes('https://chat.whatsapp.com/')) {
      alert('Url invalida.');
      return;
    }
    api
      .post('/groups/validate', {
        url,
      })
      .then((response) => setGroup(response.data));
  };

  const handleSubmit = () => {
    if (!description || !category) {
      return alert('Preencha todos os campos');
    }
    setLoading(true);
    api
      .post('/groups', {
        name: group.name,
        description,
        url: group.url,
        avatar: group.avatar,
        category,
      })
      .then((response) => {
        history.push('/?sucess=true');
      })
      .catch((err) => {
        setLoading(false);

        alert('Houve um erro');
      });
  };

  return (
    <main id="addGroup">
      <div className="container">
        <div className="box">
          <div className="avatar">
            <img src={group.avatar} alt="" />
          </div>
          {!group.name ? (
            <div className="groupValid">
              <InputField
                title="Link do grupo"
                type="TextInput"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
              <Button
                loading={loading}
                type="button"
                active={url}
                onClick={() => handleSearch()}>
                {loading ? 'Aguarde' : 'Validar'}
              </Button>
            </div>
          ) : (
            <div className="formGroup">
              <InputField
                title="Nome do Grupo"
                type="TextInput"
                maxLength="30"
                value={group.name}
                onChange={(e) => setUrl(e.target.value)}
              />
              <InputField
                maxLength="210"
                title="Descrição"
                type="TextArea"
                rows={5}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <InputField
                maxLength="70"
                title="Link do Grupo"
                type="TextInput"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
              <select onChange={(e) => setCategory(e.target.value)}>
                <option value="">Selecione uma categoria</option>
                {categories.map((item) => (
                  <option key={item._id} value={item.categoryName}>
                    {item.categoryName}
                  </option>
                ))}
              </select>
              <Button
                loading={loading}
                active
                type="button"
                onClick={() => handleSubmit()}>
                {loading ? 'Aguarde' : 'Enviar grupo'}
              </Button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

export default AddGroup;
