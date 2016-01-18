package com.loncoto.tdangularupload.metier;

public interface IGenericEntity {
	// cette methode sera fournie par l'entite concrete
	// et renverra sa clé primaire
	int fetchPrimaryKey();
}
