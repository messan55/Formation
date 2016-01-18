package com.loncoto.tdangularupload.dao;

import java.io.File;
import java.util.List;

import com.loncoto.tdangularupload.metier.Image;
import com.loncoto.tdangularupload.utils.FileStoreManager;

public class ImageDAO extends GenericDAO<Image> implements IImageDAO {
	
	private FileStoreManager fileStoreManager;	
	public FileStoreManager getFileStoreManager() {return fileStoreManager;}
	public void setFileStoreManager(FileStoreManager fileStoreManager) {this.fileStoreManager = fileStoreManager;}
	
	public boolean saveImageFile(int id, File f){
		return getFileStoreManager().saveFile("image", id, f);
	}

	public ImageDAO() {
		super(Image.class);
	}

}
