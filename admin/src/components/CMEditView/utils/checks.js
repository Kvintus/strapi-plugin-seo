import * as _ from 'lodash';

export const getMetaTitleCheckPreview = (modifiedData) => {
  const metaTitle = _.get(modifiedData, 'seo.metaTitle');

  let status = {
    message: '',
    color: 'success',
  };

  if (_.isNull(metaTitle) || _.isEmpty(metaTitle)) {
    status = {
      message: '',
      color: 'danger',
    };
  } else if (metaTitle.length > 60) {
    status = {
      message: '',
      color: 'warning',
    };
  }
  return status;
};

export const getMetaDescriptionPreview = (modifiedData) => {
  const metaDescription = _.get(modifiedData, 'seo.metaDescription');

  let status = {
    message: '',
    color: 'success',
  };

  if (_.isNull(metaDescription) || _.isEmpty(metaDescription)) {
    status = {
      message: '',
      color: 'danger',
    };
  } else if (metaDescription.length > 160) {
    status = {
      message: '',
      color: 'warning',
    };
  } else if (metaDescription.length < 50) {
    status = {
      message: '',
      color: 'warning',
    };
  }
  return status;
};

export const getAlternativeTextPreview = (emptyAltCount) => {
  const intersections = _.get(emptyAltCount, 'intersections', null);
  const richTextAlts = _.get(emptyAltCount, 'richTextAlts', null);
  const altTexts = _.get(emptyAltCount, 'altTexts', null);

  let status = {
    message: '',
    color: 'success',
  };

  const missingRichTextAlt = richTextAlts.filter((x) => x.occurences != 0).length;
  if (intersections === 0) {
    status = {
      message: '',
      color: 'warning',
    };
  } else if (altTexts.includes('')) {
    status = {
      message: '',
      color: 'danger',
    };
  } else if (missingRichTextAlt >= 1) {
    status = {
      message: '',
      color: 'danger',
    };
  }
  return status;
};

export const getWordCountPreview = (wordCount) => {
  let status = {
    message: '',
    color: 'success',
  };

  if (_.isNull(wordCount)) {
    status = {
      message: '',
      color: 'danger',
    };
    return;
  } else if (wordCount < 300) {
    status = {
      message: '',
      color: 'danger',
    };
  }
  return status;
};

export const getKeywordDensityPreview = (keywordsDensity) => {
  let status = {
    message: '',
    color: 'success',
  };

  if (_.isEmpty(keywordsDensity)) {
    status = {
      message: '',
      color: 'danger',
    };
    return status;
  }

  Object.keys(keywordsDensity).map((keyword) => {
    if (_.get(keywordsDensity[keyword], 'count', 0) === 0) {
      status = {
        message: '',
        color: 'danger',
      };
    } else if (_.get(keywordsDensity[keyword], 'count', 0) <= 1) {
      status = {
        message: '',
        color: 'warning',
      };
    }
  });

  return status;
};

export const canonicalUrlPreview = (modifiedData) => {
  const canonicalUrl = _.get(modifiedData, 'seo.canonicalURL');
  let status = {
    message: '',
    color: 'success',
  };
  if (_.isNull(canonicalUrl)) {
    status = {
      message: '',
      color: 'warning',
    };
  }
  return status;
};

export const lastUpdatedAtPreview = (modifiedData) => {
  const updatedAt = _.get(modifiedData, 'updatedAt');

  let status = {
    message: '',
    color: 'danger',
  };

  if (_.isNull(updatedAt)) {
    status = {
      message: '',
      color: 'warning',
    };
  } else {
    const oneYearAgo = Date.parse(new Date(new Date().setFullYear(new Date().getFullYear() - 1)));
    if (Date.parse(updatedAt) >= oneYearAgo) {
      status = {
        message: '',
        color: 'success',
      };
    }
  }
  return status;
};

export const metaRobotPreview = (modifiedData) => {
  const metaRobots = _.get(modifiedData, 'seo.metaRobots');
  let status = {
    message: '',
    color: 'success',
  };
  if (_.isNull(metaRobots) || _.isEmpty(metaRobots)) {
    status = {
      message: '',
      color: 'success',
    };
  }
  return status;
};

export const metaSocialPreview = (modifiedData) => {
  const metaSocial = _.get(modifiedData, 'seo.metaSocial');

  let status = {
    message: '',
    color: '',
  };

  if (_.isNull(metaSocial) || metaSocial === undefined) {
    status = {
      message: '',
      color: 'danger',
    };
    return status;
  }
  const count = metaSocial.filter((meta) => !_.isNull(meta.id)).length;
  if (count === 0) {
    status = {
      message: '',
      color: 'danger',
    };
  } else if (count == 1) {
    status = {
      message: '',
      color: 'warning',
    };
  } else {
    status = {
      message: '',
      color: 'success',
    };
  }
  return status;
};

export const structuredDataPreview = (modifiedData) => {
  const structuredData = _.get(modifiedData, 'seo.structuredData');
  let status = {
    message: '',
    color: 'success',
  };
  if (_.isEmpty(structuredData)) {
    status = {
      message: '',
      color: 'warning',
    };
  }
  return status;
};
