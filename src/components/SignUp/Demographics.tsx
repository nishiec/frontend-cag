import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';
import Image from 'react-bootstrap/Image';
import InputField from '../../genericComponents/Input';
import Form from 'react-bootstrap/Form';
import { Title } from '../layout/Titles';
import { Tagline, TitleThree } from '../layout/Titles';
import yellow_blob from '../../images/yellow_blob_2.svg';

const websiteTypeOptions = [
  'Personal/Portfolio',
  'Blog',
  'Media',
  'Social - Linktree',
  'Social - Instagram',
  'Social - Twitter',
  'Social - YouTube',
  'Social - LinkedIn',
  'Social - Facebook',
  'Social - TikTok',
  'Social - Other'
];

const Demographics: React.FC<{
  setForm: any;
  formData: any;
}> = props => {
  const { formData, setForm } = props;
  const {
    demographicsUnionStatus, // checkboxes for Unions or non-union
    demographicsAgency,
    demographicsWebsites // { url: string, websiteType: string }
  } = formData;
  const [websiteId, setWebsiteId] = useState(1);

  const onWebsiteInputChange = (
    fieldValue: string,
    fieldName: string,
    id: any
  ) => {
    const newWebsiteValues = [...demographicsWebsites];
    const findIndex = newWebsiteValues.findIndex(web => web.id === id);
    newWebsiteValues[findIndex][fieldName] = fieldValue;

    const target = {
      name: 'demographicsWebsites',
      value: newWebsiteValues
    };

    setForm({ target });
  };

  const removeWebsiteInput = (e: any, id: any) => {
    e.preventDefault();

    const newWebsiteValues = [...demographicsWebsites];
    const findIndex = newWebsiteValues.findIndex(web => web.id === id);
    newWebsiteValues.splice(findIndex, 1);

    const target = {
      name: 'demographicsWebsites',
      value: newWebsiteValues
    };

    setForm({ target });
  };

  const addWebsiteInput = (e: any) => {
    e.preventDefault();
    const newWebsiteId = websiteId + 1;
    const newWebsiteInputs = [...demographicsWebsites];

    newWebsiteInputs.push({
      id: newWebsiteId,
      url: '',
      websiteType: ''
    });

    const target = {
      name: 'demographicsWebsites',
      value: newWebsiteInputs
    };

    setWebsiteId(newWebsiteId);
    setForm({ target });
  };

  const numWebsites = demographicsWebsites.length;

  return (
    <Container>
      <Row>
        <Col lg="8">
          <Title>ALMOST DONE!</Title>
          <Tagline>Just a few more questions.</Tagline>
          <Row>
            <Col lg="10">
              <TitleThree>Union</TitleThree>
              <Container>
                <Row>
                  <Col lg="5">
                    <Form.Control
                      aria-label="union"
                      as="select"
                      defaultValue={demographicsUnionStatus}
                      name="demographicsUnionStatus"
                      onChange={setForm}
                    >
                      <option value={undefined}>Select</option>
                      <option value="Union">Union</option>
                      <option value="Non-Union">Non-Union</option>
                      <option value="Other">Other</option>
                    </Form.Control>
                  </Col>
                  <Col lg="5">
                    <Form.Control
                      aria-label="union"
                      defaultValue=""
                      disabled={demographicsUnionStatus !== 'Other'}
                      name="demographicsUnionStatusOther"
                      onChange={setForm}
                      placeholder="Other"
                    ></Form.Control>
                  </Col>
                </Row>
              </Container>
              <Container>
                <Row>
                  <Col lg="8">
                    <Form.Group>
                      <Form.Control
                        aria-label="agency"
                        defaultValue={demographicsAgency}
                        name="demographicsAgency"
                        onChange={setForm}
                        placeholder="Agency"
                      ></Form.Control>
                    </Form.Group>
                  </Col>
                </Row>
              </Container>
              <TitleThree>Website Links</TitleThree>
              <Container>
                <Row>
                  <Col lg="10">
                    {demographicsWebsites.map((websiteRow: any, i: any) => (
                      <div key={`website-row-${websiteRow.id}`}>
                        <Col lg="12">
                          <InputField
                            label="URL"
                            name="websiteUrl"
                            onChange={(e: any) =>
                              onWebsiteInputChange(
                                e.target.value || '',
                                'url',
                                websiteRow.id
                              )
                            }
                            value={websiteRow.url}
                          />
                          <Form.Control
                            aria-label="website type"
                            as="select"
                            defaultValue={websiteRow.websiteType}
                            name="websiteType"
                            onChange={(e: any) =>
                              onWebsiteInputChange(
                                e.target.value || '',
                                'websiteType',
                                websiteRow.id
                              )
                            }
                          >
                            <option value={undefined}>Select Type</option>
                            {websiteTypeOptions.map(wT => (
                              <option value={wT}>{wT}</option>
                            ))}
                          </Form.Control>
                          {numWebsites > 1 && (
                            <a
                              href="#"
                              onClick={(e: any) =>
                                removeWebsiteInput(e, websiteRow.id)
                              }
                            >
                              X
                            </a>
                          )}
                        </Col>
                      </div>
                    ))}
                    <div>
                      <a href="#" onClick={addWebsiteInput}>
                        + Add Website
                      </a>
                    </div>
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
        </Col>
        <ImageCol lg="4">
          <Image alt="" src={yellow_blob} />
        </ImageCol>
      </Row>
    </Container>
  );
};

const ImageCol = styled(Col)`
  display: flex;
  max-height: 100%;
  max-width: 100%;
`;

export default Demographics;
